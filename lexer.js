/* ============================================================
 * 雅思快穿 · 自动挖空词形还原模块 (Lexer)
 * ------------------------------------------------------------
 * 输入：普通英文文本（如 PDF 提取的书籍内容）
 * 输出：将命中词库（window.IELTS_WORDS，7306 词）的单词标记为
 *       { text, lemma, idx } 的挖空点，支持词形还原与级别过滤。
 *
 * 词形还原策略（对每个词 token）：
 *   1. 先在词库精确匹配（含大小写不敏感）
 *   2. 未命中则按后缀规则还原：-ies→-y, -ing(去e/双写), -ed(去e/双写), -es, -s, -er/-est
 *   3. 未命中则查不规则动词表（built→build, children→child, better→good 等）
 *   4. 大小写辅助：首字母大写的专有名词（非句首）跳过
 * ============================================================ */
(function () {
  'use strict';

  const IRREGULAR = {
    // 过去式 / 过去分词
    'built': 'build', 'bought': 'buy', 'caught': 'catch', 'came': 'come',
    'did': 'do', 'done': 'do', 'drank': 'drink', 'drove': 'drive',
    'drove': 'drive', 'fell': 'fall', 'felt': 'feel', 'found': 'find',
    'flew': 'fly', 'forgot': 'forget', 'forgotten': 'forget', 'gave': 'give',
    'gone': 'go', 'went': 'go', 'got': 'get', 'grown': 'grow', 'heard': 'hear',
    'held': 'hold', 'kept': 'keep', 'knew': 'know', 'known': 'know',
    'laid': 'lay', 'led': 'lead', 'left': 'leave', 'lost': 'lose', 'made': 'make',
    'meant': 'mean', 'met': 'meet', 'paid': 'pay', 'put': 'put', 'ran': 'run',
    'read': 'read', 'saw': 'see', 'seen': 'see', 'sold': 'sell', 'sent': 'send',
    'set': 'set', 'shook': 'shake', 'shot': 'shoot', 'slept': 'sleep',
    'spoke': 'speak', 'spoken': 'speak', 'spent': 'spend', 'stood': 'stand',
    'stolen': 'steal', 'swam': 'swim', 'taken': 'take', 'took': 'take',
    'taught': 'teach', 'thought': 'think', 'told': 'tell', 'won': 'win',
    'wrote': 'write', 'written': 'write',
    // 复数 / 第三人称
    'children': 'child', 'men': 'man', 'women': 'woman', 'teeth': 'tooth',
    'feet': 'foot', 'mice': 'mouse', 'people': 'person', 'lives': 'life',
    'knives': 'knife', 'leaves': 'leaf', 'selves': 'self', 'halves': 'half',
    'shelves': 'shelf', 'wolves': 'wolf', 'wives': 'wife', 'data': 'datum',
    'media': 'medium', 'criteria': 'criterion', 'phenomena': 'phenomenon',
    'analyses': 'analysis', 'bases': 'basis', 'crises': 'crisis',
    'hypotheses': 'hypothesis', 'indices': 'index', 'matrices': 'matrix',
    'radii': 'radius', 'theses': 'thesis', 'vertices': 'vertex',
    'better': 'good', 'best': 'good', 'worse': 'bad', 'worst': 'bad',
    'further': 'far', 'furthest': 'far', 'less': 'little',
    // 已是最小词形，仍需收录（避免被误还原）
    'series': 'series', 'species': 'species', 'means': 'mean',
    'works': 'work', 'has': 'have', 'had': 'have', 'was': 'be',
    'is': 'be', 'are': 'be', 'were': 'be', 'been': 'be', 'am': 'be',
    'does': 'do', 'goes': 'go', 'says': 'say', 'said': 'say'
  };

  const WORD_RE = /[A-Za-z]+(?:['-][A-Za-z]+)*/g;

  /**
   * 构建词典索引（小写 lemma → 词条）
   * @param {Array} words window.IELTS_WORDS 数组
   */
  function buildIndex(words) {
    const index = {};
    (words || []).forEach(function (w) {
      if (!w || !w.w) return;
      index[String(w.w).toLowerCase()] = w;
    });
    return index;
  }

  /**
   * 词形还原：返回候选取最大词条长度（词库命中则返回该词）。
   * 顺序：不规则表 → 后缀规则链 → 词库兜底。
   * @param {string} token 小写原词
   * @param {Object} index 词库索引
   * @returns {string|null} 还原后的词条 lemma；未命中返回 null
   */
  function lemmatize(token, index) {
    // 1) 不规则表（先于词库精确匹配：children 在词库也有，但应还原为 child）
    if (IRREGULAR[token]) {
      var ir = IRREGULAR[token];
      if (index[ir]) return ir;
    }

    var len = token.length;
    // 2) -ies → -y (studies → study)
    if (len > 3 && token.endsWith('ies')) {
      var iesStem = token.slice(0, -3) + 'y';
      if (index[iesStem]) return iesStem;
    }
    // 3) -ing → 去 ing (reading→read) / 去 ing 加 e (making→make) / 双写 (running→run)
    if (len > 4 && token.endsWith('ing')) {
      var ingStem = token.slice(0, -3);
      if (index[ingStem]) return ingStem;                       // reading→read
      if (index[ingStem + 'e']) return ingStem + 'e';           // making→make
      if (len > 5 && index[ingStem.slice(0, -1)]) return ingStem.slice(0, -1); // running→run
    }
    // 4) -ed → 去 ed (played→play) / 加 e (created→create, analysed→analyse) / 双写 (planned→plan)
    if (len > 3 && token.endsWith('ed')) {
      var edStem = token.slice(0, -2);
      if (index[edStem]) return edStem;
      if (index[edStem + 'e']) return edStem + 'e';             // created→create, analysed→analyse
      if (len > 4 && index[edStem.slice(0, -1)]) return edStem.slice(0, -1); // planned→plan
    }
    // 5) -es → 去 es (watches→watch) / 加 e (houses→house, analyses→analyse)
    if (len > 3 && token.endsWith('es')) {
      var esStem = token.slice(0, -2);
      if (index[esStem]) return esStem;
      if (index[esStem + 'e']) return esStem + 'e';
    }
    // 6) -s → 去 s (books→book, governments→government)
    if (len > 3 && token.endsWith('s') && !token.endsWith('ss') && !token.endsWith('is')) {
      var sStem = token.slice(0, -1);
      if (index[sStem]) return sStem;
    }
    // 7) -er / -est → 去后缀 (speaker→speak, latest→late)
    if (len > 4 && token.endsWith('er') && index[token.slice(0, -2)]) return token.slice(0, -2);
    if (len > 5 && token.endsWith('est') && index[token.slice(0, -3)]) return token.slice(0, -3);

    // 8) 兜底：原文词形本身就在词库
    if (index[token]) return token;
    return null;
  }

  /**
   * 扫描文本，返回命中列表（按原词形式）。
   * @param {string} text 原文
   * @param {Object} opts { minCefr, index }
   * @returns {Array<{text:string, lemma:string, cefr:string, idx:number}>}
   */
  function scan(text, opts) {
    opts = opts || {};
    var index = opts.index || buildIndex(opts.words || (typeof window !== 'undefined' && window.IELTS_WORDS) || []);
    var minCefr = opts.minCefr || 'A2'; // A1 太基础不挖
    var order = { 'A1': 0, 'A2': 1, 'B1': 2, 'B2': 3, 'C1': 4, 'C2': 5 };
    var minRank = order[minCefr] != null ? order[minCefr] : 1;

    var results = [];
    var re = WORD_RE;
    re.lastIndex = 0;
    var m;
    while ((m = re.exec(text)) !== null) {
      var raw = m[0];
      // 去除两端撇号（如 's）
      var clean = raw.replace(/^'+|'+$/g, '');
      if (clean.length < 2) continue;
      var lower = clean.toLowerCase();

      // 专有名词启发：首字母大写且后面跟小写字母，且不是句首（往前跳过空白看前一非空白字符）
      var isCap = /^[A-Z]/.test(clean) && /[a-z]/.test(clean.slice(1));
      var j = m.index - 1;
      while (j >= 0 && /\s/.test(text[j])) j--;
      var prevNonSpace = j >= 0 ? text[j] : '';
      var sentenceStart = j < 0 || /[.!?。！？]/.test(prevNonSpace) || /["'([-]/.test(prevNonSpace);
      var looksProper = isCap && !sentenceStart;

      // 挖空决策：原文词形在词库 → 直接用原文词形（其 CEFR 决定是否挖）；
      // 原文词形不在词库 → 词形还原，用还原后的词条。
      // 这样 reading(A1) 不挖、running(A2) 挖、analysed→analyse(B2) 挖。
      var entry = index[lower];
      var lemma = lower;
      if (!entry) {
        lemma = lemmatize(lower, index);
        if (!lemma) continue;
        entry = index[lemma];
      }
      var rank = order[entry.cefr] != null ? order[entry.cefr] : -1;
      // 太基础的词（A1）不挖；CEFR 为空的词不挖（保留词库原样）
      if (rank < minRank) continue;
      if (looksProper && rank <= 1) continue; // A2 且像专有名词 → 跳过

      results.push({
        text: clean,          // 原文词形（如 reading）
        lemma: lemma,         // 词条（如 read）
        cefr: entry.cefr || '',
        idx: m.index + (raw.length - clean.length) / 2 // 近似位置（撇号导致偏移时可忽略）
      });
    }
    return results;
  }

  /**
   * 渲染挖空 HTML。mode: 'full' 高亮可点 | 'blanks' 下划线
   * @param {string} text 原文
   * @param {Array} hits scan 结果
   * @param {string} mode
   */
  function renderHits(text, hits, mode) {
    var html = '';
    var last = 0;
    hits.forEach(function (h) {
      // 通过 text 查找精确位置（h.idx 可能因撇号有偏差，用 indexOf 修正）
      var start = text.indexOf(h.text, last);
      if (start < 0) start = h.idx;
      if (start < last) start = last;
      var end = start + h.text.length;
      html += escapeHtml(text.slice(last, start));
      if (mode === 'blanks') {
        html += '<span class="blank-tag" data-word="' + escapeAttr(h.lemma) + '">' + '_'.repeat(Math.max(3, h.lemma.length)) + '</span>';
      } else {
        html += '<span class="word-tag" data-word="' + escapeAttr(h.lemma) + '">' + escapeHtml(h.text) + '</span>';
      }
      last = end;
    });
    html += escapeHtml(text.slice(last));
    return html;
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/"/g, '&quot;');
  }

  /**
   * 中文正文自动替换：用词库中文释义（senses[].zh）在中文文本中做最长匹配，
   * 命中处标记为 { text: 中文释义片段, lemma: 英文词条, cefr, idx }。
   * 允许重复（同一个词在文中出现多次全部替换）。
   * 策略：释义按首字建哈希表 → 逐字符扫描匹配，同一位置取最长释义；
   *       同长度取 CEFR 级别更高者（更值得学）。
   * @param {string} text 中文正文
   * @param {Object} opts { minCefr, index }
   * @returns {Array<{text:string, lemma:string, cefr:string, zh:string, idx:number}>}
   */
  function scanZh(text, opts) {
    opts = opts || {};
    var index = opts.index || buildIndex(opts.words || (typeof window !== 'undefined' && window.IELTS_WORDS) || []);
    var minCefr = opts.minCefr || 'A2';
    var order = { 'A1': 0, 'A2': 1, 'B1': 2, 'B2': 3, 'C1': 4, 'C2': 5 };
    var minRank = order[minCefr] != null ? order[minCefr] : 1;

    // 1) 收集 (释义 → lemma) 对：拆分 senses 的 zh（按 ；；、，, 分隔），过滤单字/纯符号
    var zhPairs = [];
    Object.keys(index).forEach(function (lemma) {
      var entry = index[lemma];
      var rank = order[entry.cefr] != null ? order[entry.cefr] : -1;
      if (rank < minRank) return;
      (entry.senses || []).forEach(function (s) {
        var zh = String(s.zh || '');
        zh.split(/[；;、，,]/).forEach(function (p) {
          p = p.replace(/^[（(]|[）)]$/g, '').trim();
          if (p.length < 2) return;                    // 单字释义太泛（"人"、"做"），跳过
          if (!/[\u4e00-\u9fa5]/.test(p)) return;      // 无中文的释义无法在中文正文匹配
          zhPairs.push({ zh: p, lemma: lemma, cefr: entry.cefr || '', rank: rank });
        });
      });
    });
    if (!zhPairs.length) return [];

    // 2) 按首字分组
    var zhMap = {};
    zhPairs.forEach(function (pair) {
      var c = pair.zh.charAt(0);
      (zhMap[c] = zhMap[c] || []).push(pair);
    });

    // 3) 逐字符扫描匹配
    var results = [];
    var n = text.length;
    var i = 0;
    while (i < n) {
      var cands = zhMap[text.charAt(i)];
      if (cands) {
        var best = null;
        for (var k = 0; k < cands.length; k++) {
          var p = cands[k];
          if (text.startsWith(p.zh, i)) {
            if (!best ||
                p.zh.length > best.zh.length ||
                (p.zh.length === best.zh.length && p.rank > best.rank)) {
              best = p;
            }
          }
        }
        if (best) {
          results.push({
            text: best.zh,       // 中文片段（渲染时替换掉它）
            lemma: best.lemma,   // 英文词条
            cefr: best.cefr,
            zh: best.zh,
            idx: i
          });
          i += best.zh.length;
          continue;
        }
      }
      i++;
    }
    return results;
  }

  /**
   * 渲染中文替换 HTML。
   * mode: 'full' → 命中处显示英文单词 + 中文小字提示（边读边记）；
   *        'blanks' → 命中处直接显示英文单词（无中文提示），靠上下文回忆意思（中文语境已提示）。
   * 两种模式下英文单词都可点击弹出词汇书级讲解（中文释义 + 英/美音标）。
   * @param {string} text 中文原文
   * @param {Array} hits scanZh 结果
   * @param {string} mode
   */
  function renderZhHits(text, hits, mode) {
    var html = '';
    var last = 0;
    hits.forEach(function (h) {
      var start = text.indexOf(h.text, last);
      if (start < 0) start = h.idx;
      if (start < last) start = last;
      var end = start + h.text.length;
      html += escapeHtml(text.slice(last, start));
      var lemma = h.lemma;
      if (mode === 'blanks') {
        // 挖空模式：直接显示英文单词（下划线样式暗示"可点看讲解"），不显示中文提示
        html += '<span class="blank-tag" data-word="' + escapeAttr(lemma) + '">' + escapeHtml(lemma) + '</span>';
      } else {
        html += '<span class="word-tag" data-word="' + escapeAttr(lemma) + '">' + escapeHtml(lemma) + '</span>' +
                '<span class="zh-tip">' + escapeHtml(h.zh) + '</span>';
      }
      last = end;
    });
    html += escapeHtml(text.slice(last));
    return html;
  }

  // 导出
  var Lexer = {
    buildIndex: buildIndex,
    lemmatize: lemmatize,
    scan: scan,
    renderHits: renderHits,
    scanZh: scanZh,
    renderZhHits: renderZhHits,
    IRREGULAR: IRREGULAR
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = Lexer;
  if (typeof window !== 'undefined') window.Lexer = Lexer;
})();
