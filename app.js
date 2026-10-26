/* ============================================================
 * 转换阅读 · Starlight Rebirth — H5 单页应用
 * 功能: 书架 / 阅读(点词释义·挖空·全英) / 生词本 / 词汇书(7300+词) / 我的
 * 数据: window.IELTS_WORDS (7306 词) + 小说章节内联
 * ============================================================ */

/* ---------- 小说章节数据 ---------- */
const NOVEL = [
  {
    id: 'c1',
    title: 'Chapter 1: Cursed Crown, Sharp Tongue',
    subtitle: '被废的嫡公主 · 没有退路，只有反击',
    intro: 'She woke up as the disgraced princess of a dying dynasty — framed, stripped of her title, and sentenced to exile. But Lin Yue had been a negotiator in her old life. And negotiators never lose.',
    paragraphs: [
      'The cold woke her. Frost laced the window of the royal carriage, and her wrists were raw where the iron had bitten. [setback] echoed in her mind: the minister had called her failure "a regrettable [setback] for the realm." A [setback], she thought bitterly, was something that delayed progress. It did not end it.',
      'She knew the court. For ten years she had watched its rituals, its whispers, its careful [prestige] — the fragile respect that kept a kingdom together. A princess who had lost [prestige] was a princess who could be erased. But Lin Yue had learned one truth in her old world: what is built can be lost, and what is lost can be reclaimed. She would never [abandon] the crown that was rightfully hers.',
      'The forged letter lay hidden beneath her sleeve, recovered from the fire before it could burn. The [cunning] minister who had framed her had made one mistake: he had written the letter himself, and his hand was as distinctive as his cruelty.',
      'At the checkpoint, soldiers blocked the road. "By order of the court," the captain announced, "the prisoner is to be taken to the northern wastes." Food and hope were [scarce] beyond the wall, and everyone knew it.',
      'Lin Yue lifted her chin. Her voice did not shake. "Then I request an audience with the emperor — here, before your garrison, in the light of day." The captain hesitated. A woman who looked like this, calm enough to [confront] the throne itself, was not a woman he wished to escort into exile.',
      'She had no army, no allies, no mercy to expect. What she had was [resilience]: the ability to rise, again and again, no matter how many times the world pushed her down. And in a realm where trust was [scarce], a single truth, spoken loudly enough, was the sharpest weapon of all.',
      'By sunset, the court would learn that the princess they had sentenced to death by silence was coming home — to [confront] them all.'
    ],
    vocabKeys: ['setback', 'prestige', 'abandon', 'cunning', 'scarce', 'confront', 'resilience']
  },
  {
    id: 'c2',
    title: 'Chapter 2: The Office Wars',
    subtitle: '从古到今 · 战场换成了写字楼',
    intro: 'She blinked, and the palace was gone. In its place: a glass skyscraper, a badge on her chest, and a deadline at five o\'clock. Same game, different crown. The wolves here just wore suits.',
    paragraphs: [
      'The corporate world was a palace with a Wi-Fi password. Lin Yue had arrived as a junior analyst, and she had exactly one month to prove she belonged — or be swept out in the annual review. It was the [opportunity] she had been praying for: a chance to show the board what she could do.',
      'Her [colleague] Mark had already stolen her draft. He stood at the projector now, presenting her charts as if they were his own, his voice smooth as glass. A [colleague], the manual said, is a person you work with. It said nothing about what to do when that person became a thief.',
      'She did not scream. She did not [abandon] the room in anger, though her pride screamed at her to run. Instead, she waited until the Q&A, then stood. "I would like to [negotiate] a small clarification," she said, her smile polite. "Mr. Cole, could you explain why the final slide references the data set only I was given access to yesterday?"',
      'The silence was beautiful. She could see the board members exchanging glances — curiosity, then doubt, then a flicker of interest. Numbers alone would never [convince] them. But a story, told at the right moment, could [convince] anyone.',
      'After the meeting, the CEO called her in. "That was either very brave or very foolish," he said. She met his eyes. "Both, sir. It\'s called [ambitious]." The corner office had always been the [incentive] that drove her — the promise of a seat at the table, a voice that mattered.',
      'By Friday, Mark\'s name had vanished from the presentation. Hers was on the cover. And in her inbox sat a message from HR: a decision to [promote] her to senior analyst, effective Monday, pending one final [negotiate] over her terms.',
      'She smiled at the glowing screen. The palace had many faces. She intended to win in every one of them.'
    ],
    vocabKeys: ['opportunity', 'colleague', 'abandon', 'negotiate', 'convince', 'ambitious', 'incentive', 'promote']
  },
  {
    id: 'c3',
    title: 'Chapter 3: Starfall',
    subtitle: '星际逃生 · 三分钟决定三百条命',
    intro: 'The third world threw her into a starship with a failing engine, a crew that spoke three languages, and a countdown to catastrophe. It was the most terrifying — and most thrilling — test yet.',
    paragraphs: [
      'The alarms began at 02:14 ship-time. Lin Yue had been on the bridge for exactly forty seconds when the engine [malfunction] warning bloomed across every screen. A [malfunction], she reminded herself, is a failure to work correctly. Her job was to make it work again.',
      'The captain was dead weight, shouting in panic. She pushed past him to the helm. The ship had lost its navigation array, so she would have to [navigate] by dead reckoning: plotting a course through the debris field using the stars and the fading gyroscope.',
      '"We have nine minutes before the reactor breaches," the engineer screamed. "We cannot [evacuate] nine decks in nine minutes!" But they could — if they [coordinate] perfectly. "Listen to me!" Lin Yue\'s voice cut through the noise like a blade. "I need a count in three languages. Translate, now."',
      'They moved like a single organism: Chinese, English, and Portuguese orders interweaving, three hundred passengers streaming toward the escape pods. Every second was [urgent]; every door that jammed cost lives. She felt the cold [crisis] pressing against her ribs, the temptation to freeze — and she remembered the lesson of the first world: in a [crisis], the calmest voice is the strongest.',
      '"Route the emergency power through the pod bays instead of the cargo hold," she ordered. It was unorthodox, dangerous, and absolutely [innovative]. The chief engineer stared at her. "That\'s not in any manual." "Then we\'ll write a new one," she said.',
      'The final pod launched at 02:22:58, one second before the reactor went dark. Lin Yue watched it drift away from the porthole, three hundred lives safe because someone had been willing to [navigate] when the path was gone.',
      'She leaned back in the dead captain\'s chair and laughed, breathless, alive. Somewhere in the dark, the stars were still there. So was she.'
    ],
    vocabKeys: ['malfunction', 'navigate', 'coordinate', 'urgent', 'crisis', 'innovative', 'evacuate']
  },
  {
    id: 'c4',
    title: 'Chapter 4: The Queen\'s Debate',
    subtitle: '辩论之巅 · 用语言加冕自己',
    intro: 'The fourth world made her a scholarship student at an elite academy, where the annual international debate would decide everything. Her opponent was brilliant, ruthless, and backed by the school\'s richest patron. She had only words.',
    paragraphs: [
      'The auditorium was a cathedral of polished wood and watchful eyes. Lin Yue stood at the podium, her notes reduced to a single card. The [debate] of the year was about to begin: should wealth decide access to education? Her opponent, the golden boy of the academy, had already begun his opening — [eloquent], polished, rehearsed.',
      'She listened. That was the secret nobody taught you in school: to truly listen, to find the crack in the argument. "My [opponent] has quoted the statistics of progress," she said when her turn came. "But statistics are only true if the people behind them are real."',
      'Her [strategy] was not to out-shout him. It was to be so calm, so [confident], so utterly sure of every word, that the audience would lean in. She quoted no textbooks. She told the story of the girl from the northern wastes, of the man who had called her failure "a regretful [setback]," and of how she had walked home anyway.',
      'The room forgot it was a competition. They were leaning forward now, caught in the rhythm of her voice — the way she paused, the way she looked each judge in the eye, the way a single, well-chosen word could land like a verdict.',
      '"Education," she finished, "is not a reward for those who can pay. It is the ladder for those who can climb. And it belongs to everyone who is willing to try."',
      'For one heartbeat, there was silence. Then the [applause] came — a wave that started at the back and rolled forward, shaking the chandeliers. Her [opponent] smiled ruefully and extended his hand. "That," he said, "was a [victory] in every sense of the word."',
      'She shook it. In this world, they gave you a trophy. But the real prize was already hers: the proof that a sharp tongue, aimed true, could crown its own queen.'
    ],
    vocabKeys: ['debate', 'eloquent', 'opponent', 'strategy', 'confident', 'applause', 'victory', 'setback']
  },
  {
    id: 'c5',
    title: 'Chapter 5: Return and the Interview',
    subtitle: '回到现实 · 雅思是新的起点',
    intro: 'She woke in her own bed, in her own city, twenty-two years old and about to graduate. The worlds she had conquered were gone — but the words remained, glowing like embers in her mind. It was time for the hardest interview of all: real life.',
    paragraphs: [
      'Morning light fell across her desk, where her IELTS results lay face-up. Band 8. She had studied every spare hour between shifts, telling herself that a [milestone] is not a destination but proof of distance traveled.',
      'The [interview] was for a scholarship at a university abroad — the one she had dreamed of since she was a girl. Her hands were cold as she walked into the room, but her voice did not shake. "I want to [pursue] a career in international development," she said. "I believe language is the bridge that connects people who would otherwise never meet."',
      'The panel was silent. Then the chairwoman smiled. "Your application says you worked three jobs while studying to [graduate]. That takes discipline. Tell us about a time you failed."',
      'Lin Yue paused. A hundred worlds flashed behind her eyes: the exile, the stolen draft, the dying starship, the roaring auditorium. "I failed to [achieve] what was asked of me once," she said slowly. "And then I learned that failure is only permanent if you [abandon] the attempt."',
      'She told them, in the measured, deliberate English she had built word by word, about a project that had collapsed and how she had rebuilt it. She did not need to [convince] them — she simply let the truth do its work. To [qualify] for this scholarship was not about a single perfect answer. It was about every imperfect day that had led her here.',
      'As she stood to leave, the chairwoman stopped her. "One more question, Miss Lin. In one sentence: why should we choose you?"',
      'She thought of all the crowns she had worn and cast aside. "Because I have learned," she said, "to turn a [setback] into a story, and a story into a stepping stone — and I intend to keep walking." The room was quiet; it was, after all, just an interview. But the smile on the chairwoman\'s face was better than any trophy she had ever won.',
      'She stepped out into the sunlight. Somewhere above, the stars were still there — in the sky, and in the words she carried home.'
    ],
    vocabKeys: ['graduate', 'milestone', 'interview', 'pursue', 'achieve', 'abandon', 'convince', 'qualify', 'setback']
  }
];

/* ---------- 词汇数据 ---------- */
let WORDS = (window.IELTS_WORDS && Array.isArray(window.IELTS_WORDS)) ? window.IELTS_WORDS : []; // 7306 词（异步加载，缺失时不崩溃）
let WORD_INDEX = {};
let WORD_INDEX_READY = false;
function rebuildWordIndex() {
  // 词库可能被引导加载器异步补齐（失败重试后）——重新从全局读取并重建索引
  if (window.IELTS_WORDS && Array.isArray(window.IELTS_WORDS) && !WORD_INDEX_READY) {
    WORDS = window.IELTS_WORDS;
    WORD_INDEX = {};
    WORDS.forEach(w => { WORD_INDEX[w.w.toLowerCase()] = w; });
    WORD_INDEX_READY = true;
    return true;
  }
  return WORD_INDEX_READY;
}
window.__ensureWords = rebuildWordIndex; // 供引导加载器调用
rebuildWordIndex();

/* ---------- 内置中文书：《遥远的救世主》 ---------- */
// 46 章全文内置（data/jiushizhu.js），打开时用 scanZh 实时扫描（中文释义→英文替换）
const ZH_BOOK = {
  id: 'zh_jiushizhu',
  title: '遥远的救世主',
  subtitle: '豆豆 著 · 中文正文自动替换为雅思英语',
  author: '豆豆',
  lang: 'zh',
  chapters: (window.JIU_SHI_ZHU || [])
};
let zhBookCache = null; // 扫描结果缓存 { chapters: [{id,title,text,hits,lang,words}] }

async function openZhBook() {
  const chs = ZH_BOOK.chapters;
  if (!chs.length) { toast('内置书未加载'); return; }
  if (zhBookCache) { state.pdfBook = zhBookCache; state.pdfChapter = 0; openPdfChapter(0); return; }
  showImportProgress('正在扫描全书雅思词汇（46 章）…', 5);
  // 分片处理避免卡死：每章 4ms 让出主线程
  const index = Lexer.buildIndex(WORDS);
  const minCefr = state.importLevel;
  const chapterData = [];
  for (let ci = 0; ci < chs.length; ci++) {
    const ch = chs[ci];
    const text = (ch.paragraphs || []).join('\n');
    const hits = Lexer.scanZh(text, { index, minCefr });
    chapterData.push({
      id: 'zh' + ci,
      title: ch.title || '第 ' + (ci + 1) + ' 章',
      text,
      hits,
      lang: 'zh',
      words: new Set(hits.map(h => h.lemma.toLowerCase())).size
    });
    showImportProgress(`扫描中（第 ${ci + 1}/${chs.length} 章，命中 ${hits.length} 词）…`, 5 + Math.round(ci / chs.length * 90));
    if (ci % 5 === 4) await new Promise(r => setTimeout(r, 0)); // 让渲染更新
  }
  hideImportProgress();
  zhBookCache = {
    id: ZH_BOOK.id,
    book: {
      id: ZH_BOOK.id,
      type: 'builtin-zh',
      title: ZH_BOOK.title,
      subtitle: ZH_BOOK.subtitle,
      chapterCount: chapterData.length,
      lang: 'zh',
      words: new Set(chapterData.reduce((a, c) => a.concat(c.hits.map(h => h.lemma.toLowerCase())), [])).size,
      coverage: computeCoverage(chapterData),
      builtin: true
    },
    chapters: chapterData
  };
  state.pdfBook = zhBookCache;
  state.pdfChapter = 0;
  openPdfChapter(0);
}

// 内置中文书覆盖率（书架卡片显示用）
function zhCoveragePct() {
  if (zhBookCache && zhBookCache.book && zhBookCache.book.coverage) {
    return zhBookCache.book.coverage.pct + '%（' + zhBookCache.book.coverage.hitCount + '/7306）';
  }
  // 未扫描过：先算第一章作为快速估算（首次点击书卡时扫描全部）
  return '…';
}

// 打开《遥远的救世主》覆盖率详情（若未扫描则先完整扫描）
async function openZhBookCoverage() {
  if (!zhBookCache) {
    showImportProgress('首次扫描全书词汇（约 3 秒）…', 10);
    const index = Lexer.buildIndex(WORDS);
    const minCefr = state.importLevel;
    const chapterData = (ZH_BOOK.chapters || []).map((ch, ci) => {
      const text = (ch.paragraphs || []).join('\n');
      const hits = Lexer.scanZh(text, { index, minCefr });
      return { id: 'zh' + ci, title: ch.title || '第 ' + (ci + 1) + ' 章', text, hits, lang: 'zh', words: new Set(hits.map(h => h.lemma.toLowerCase())).size };
    });
    hideImportProgress();
    zhBookCache = {
      id: ZH_BOOK.id,
      book: {
        id: ZH_BOOK.id, type: 'builtin-zh', title: ZH_BOOK.title, subtitle: ZH_BOOK.subtitle,
        chapterCount: chapterData.length, lang: 'zh',
        words: new Set(chapterData.reduce((a, c) => a.concat(c.hits.map(h => h.lemma.toLowerCase())), [])).size,
        coverage: computeCoverage(chapterData), builtin: true
      },
      chapters: chapterData
    };
  }
  // 直接手动渲染覆盖率（内置书不在 localStorage 书库里）
  const c = zhBookCache.book.coverage;
  const levels = ['A2', 'B1', 'B2', 'C1', 'C2'];
  const rows = levels.map(lv => {
    const h = c.hit[lv] || 0, t = c.total[lv] || 0;
    const p = t ? Math.round(h / t * 100) : 0;
    const miss = (c.missing && c.missing[lv] && c.missing[lv].length) ? c.missing[lv] : [];
    const missHtml = miss.length ? `<div class="cov-miss">缺：${miss.slice(0, 60).map(esc).join('、')}${miss.length > 60 ? `… 等 ${miss.length} 个` : ''}</div>` : '';
    return `<div class="cov-row">
      <div class="cov-lv">${lv}</div>
      <div class="cov-bar"><div class="cov-bar-fill" style="width:${p}%"></div></div>
      <div class="cov-num">${h}/${t} · ${p}%</div>
      ${missHtml}
    </div>`;
  }).join('');
  $('#coverageBody').innerHTML = `
    <div class="cov-head">
      <div class="cov-title">《${esc(zhBookCache.book.title)}》</div>
      <div class="cov-overall">全书命中 <b>${c.hitCount}</b> / 7306 词库词（<b>${c.pct}%</b>）</div>
      <div class="cov-tip">中文正文按"中文释义→英文单词"替换，同一释义取 CEFR 最高级别词条；可多导入几本书互补覆盖。</div>
    </div>
    ${rows}
    <div class="cov-foot">未命中词按级别列出（每级最多显示 60 个），可作"待补充"清单。</div>`;
  showModal($('#coverageModal'));
  document.body.style.overflow = 'hidden';
}

/* ---------- 书库模型 ---------- */
// books: [{ id, type:'builtin'|'pdf', title, subtitle, cover?, chapterCount, words, createdAt }]
// PDF 书章节：{ id, title, pages:[...], text, hits }  hits = Lexer.scan 结果（自动挖空）
const LIB_KEY = 'ielts_library';
function loadLibrary() { return load(LIB_KEY) || []; }
function saveLibrary(lib) { save(LIB_KEY, lib); }
function getBook(id) { return loadLibrary().find(b => b.id === id) || null; }

/* ---------- 词库覆盖率 ---------- */
// 按 CEFR 级别统计一本书命中词库的比例与缺失词清单
// coverage = { pct, hit: {A2:n,B1:n,...}, total: {A2:n,...}, missing: {A2:[word,...],...}, hitWords: Set }
function computeCoverage(chapterData) {
  const hitLemmas = new Set();
  (chapterData || []).forEach(ch => (ch.hits || []).forEach(h => hitLemmas.add(h.lemma.toLowerCase())));
  const total = { A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
  const hit = { A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
  const missing = { A2: [], B1: [], B2: [], C1: [], C2: [] };
  WORDS.forEach(w => {
    let lv = (w.cefr || 'B1').substring(0, 2);
    if (!(lv in total)) lv = 'B1';
    total[lv]++;
    const key = w.w.toLowerCase();
    if (hitLemmas.has(key)) hit[lv]++;
    else if (missing[lv].length < 200) missing[lv].push(w.w); // 每级最多存 200 个缺失词
  });
  const covered = Object.keys(total).reduce((s, lv) => s + hit[lv], 0);
  const all = Object.keys(total).reduce((s, lv) => s + total[lv], 0);
  return { pct: all ? Math.round(covered / all * 100) : 0, hit, total, missing, hitCount: hitLemmas.size };
}

function openCoverageModal(bookId) {
  const book = getBook(bookId);
  if (!book || !book.coverage) { toast('本书暂无覆盖率统计（旧版本导入，可重新导入）'); return; }
  const c = book.coverage;
  const levels = ['A2', 'B1', 'B2', 'C1', 'C2'];
  const rows = levels.map(lv => {
    const h = c.hit[lv] || 0, t = c.total[lv] || 0;
    const p = t ? Math.round(h / t * 100) : 0;
    const miss = (c.missing && c.missing[lv] && c.missing[lv].length) ? c.missing[lv] : [];
    const missHtml = miss.length ? `<div class="cov-miss">缺：${miss.slice(0, 60).map(esc).join('、')}${miss.length > 60 ? `… 等 ${miss.length} 个` : ''}</div>` : '';
    return `<div class="cov-row">
      <div class="cov-lv">${lv}</div>
      <div class="cov-bar"><div class="cov-bar-fill" style="width:${p}%"></div></div>
      <div class="cov-num">${h}/${t} · ${p}%</div>
      ${missHtml}
    </div>`;
  }).join('');
  $('#coverageBody').innerHTML = `
    <div class="cov-head">
      <div class="cov-title">《${esc(book.title)}》</div>
      <div class="cov-overall">全书命中 <b>${c.hitCount}</b> / 7306 词库词（<b>${c.pct}%</b>）</div>
      <div class="cov-tip">同一中文释义对应多个英文词条，默认取级别最高者；可多导入几本书互补覆盖。</div>
    </div>
    ${rows}
    <div class="cov-foot">未命中词按级别列出（每级最多显示 60 个），可作"待补充"清单。</div>`;
  $('#coverageModal').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeCoverageModal() {
  hideModal($('#coverageModal'));
  document.body.style.overflow = '';
}

// IndexedDB：PDF 书正文（文本大，不进 localStorage）
const IDB_NAME = 'ielts-fast-travel';
const IDB_STORE = 'books';
function idbOpen() {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in window)) return reject(new Error('no-indexeddb'));
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) db.createObjectStore(IDB_STORE, { keyPath: 'id' });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbPut(key, val) {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(val);
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => { db.close(); reject(tx.error); };
  });
}
async function idbGet(key) {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const req = db.transaction(IDB_STORE, 'readonly').objectStore(IDB_STORE).get(key);
    req.onsuccess = () => { db.close(); resolve(req.result || null); };
    req.onerror = () => { db.close(); reject(req.error); };
  });
}
async function idbDelete(key) {
  const db = await idbOpen();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(key);
    tx.oncomplete = () => { db.close(); resolve(); };
    tx.onerror = () => { db.close(); reject(tx.error); };
  });
}

/* ---------- 本地存储 ---------- */
const LS = {
  FAVORITES: 'ielts_favs',
  PROGRESS: 'ielts_progress',
  QUIZ_HISTORY: 'ielts_quiz_history',
  SETTINGS: 'ielts_settings'
};
const load = k => { try { return JSON.parse(localStorage.getItem(k)) || null; } catch (e) { return null; } };
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));
function getFavs() { return load(LS.FAVORITES) || []; }
function setFavs(f) { save(LS.FAVORITES, f); }
function getProgress() { return load(LS.PROGRESS) || {}; }
function getSettings() {
  const s = load(LS.SETTINGS) || { mode: 'bilingual' };
  // 旧版模式值迁移：full → bilingual, blanks → english
  if (s.mode === 'full') { s.mode = 'bilingual'; save(LS.SETTINGS, s); }
  else if (s.mode === 'blanks') { s.mode = 'english'; save(LS.SETTINGS, s); }
  return s;
}

/* ---------- 全局状态 ---------- */
const state = {
  view: 'bookshelf',
  chapterId: 'c1',
  mode: getSettings().mode || 'bilingual',
  quiz: null,
  wbPage: 0,
  wbPageSize: 60,
  wbResults: [],
  wbSearchTerm: '',
  wbCefr: 'all',
  // 导入书状态
  currentBook: null,        // 当前阅读的书对象
  pdfChapter: 0,           // 当前 PDF 章节索引
  pdfBook: null,           // 当前 PDF 书（含章节+hits）
  importLevel: getSettings().blankLevel || 'A2' // 挖空难度：A2 基础 / B1 标准 / B2 进阶
};

/* ================= 工具函数 ================= */
function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function $(sel) { return document.querySelector(sel); }
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = $('#view-' + name);
  if (!target) return;
  target.classList.add('active');
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  state.view = name;
  // 离开阅读视图时隐藏模式切换
  if (name !== 'reader' && name !== 'pdfreader') $('#modeToggle').hidden = true;
  window.scrollTo(0, 0);
  if (name === 'bookshelf') renderBookshelf();
  if (name === 'vocab') renderFavs();
  if (name === 'wordbook') renderWordbook();
  if (name === 'mine') renderMine();
}
function getWord(w) { return WORD_INDEX[String(w).toLowerCase()]; }

/* ================= 弹窗统一开关（双保险） =================
   同时设置 hidden 属性和 style.display：
   - 若 CSS 已带 [hidden]{display:none!important}，hidden 即可生效；
   - 若用户缓存旧 CSS 无此规则，内联 style.display 也能压过 .modal-mask 的 display:flex。 */
function showModal(el) { el.hidden = false; el.style.display = 'flex'; }
function hideModal(el) { el.hidden = true; el.style.display = 'none'; }

/* ================= 翻译层（全英文模式用） =================
   主接口：有道开放翻译（aidemo.youdao.com/trans，免费无需 key）
   兜底：MyMemory（api.mymemory.translated.net）
   按"书id + 章节索引"缓存到 IndexedDB，切换模式不重复翻译。
   langPair: 'zh-en'（中文书翻英文）| 'en-zh'（英文书翻中文，纯英文模式为译文可选） */
const TRANS_CACHE_PREFIX = 'trans_';
async function translateText(text, from, to, key) {
  const fullKey = TRANS_CACHE_PREFIX + key;
  // 已有缓存直接返回
  try {
    const cached = await idbGet(fullKey);
    if (cached && cached.text) return cached.text;
  } catch (e) { /* 缓存不可用则直接翻译 */ }
  const MAXLEN = 1500; // 有道接口单次上限，超长按句切分
  const chunks = splitForTrans(text, MAXLEN);
  const out = [];
  for (const c of chunks) {
    const t = await transChunk(c, from, to);
    out.push(t);
    await new Promise(r => setTimeout(r, 80)); // 限速，防接口封禁
  }
  const joined = out.join('\n');
  try { await idbPut(fullKey, { id: fullKey, text: joined }); } catch (e) { /* 缓存失败不影响阅读 */ }
  return joined;
}
// 按标点切分，每段不超过 maxLen 字符（保留段落边界）
function splitForTrans(text, maxLen) {
  if (text.length <= maxLen) return [text];
  const parts = [];
  const sents = text.split(/(?<=[。！？!?；;\n])/);
  let cur = '';
  for (const s of sents) {
    if ((cur + s).length > maxLen && cur) { parts.push(cur); cur = s; }
    else cur += s;
    if (cur.length > maxLen) { // 单句超长硬切
      while (cur.length > maxLen) { parts.push(cur.slice(0, maxLen)); cur = cur.slice(maxLen); }
    }
  }
  if (cur) parts.push(cur);
  return parts;
}
async function transChunk(text, from, to) {
  if (!text.trim()) return '';
  // 主：有道
  try {
    const url = 'https://aidemo.youdao.com/trans?q=' + encodeURIComponent(text) + '&from=' + from + '&to=' + to;
    const r = await fetch(url, { method: 'GET' });
    const j = await r.json();
    if (j && j.errorCode === '0' && j.translation && j.translation[0]) return j.translation[0];
  } catch (e) { /* 有道失败走兜底 */ }
  // 兜底：MyMemory
  try {
    const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=' + from + '%7C' + to;
    const r = await fetch(url);
    const j = await r.json();
    if (j && j.responseData && j.responseData.translatedText) return j.responseData.translatedText;
  } catch (e) { /* 两个都失败 */ }
  throw new Error('翻译接口均不可用');
}
// 中文书全英文：整章翻译（懒翻译 + 缓存）
async function getZhChapterTranslation(ch, bookId) {
  const key = 'zh_' + bookId + '_' + (ch.id || 'ch' + (state.pdfBook ? state.pdfBook.chapters.indexOf(ch) : 0));
  const text = ch.text || '';
  if (!text.trim()) return '';
  return translateText(text, 'zh-CHS', 'en', key);
}
// 英文书全英文模式：不翻译，直接原样（模式3=纯英文原文）
function getEnPlain(ch) { return ch.text || ''; }

/* ================= 单词弹层 ================= */
let modalWord = null;
function openWordModal(w, chapterId) {
  const entry = getWord(w);
  if (!entry) return;
  modalWord = w;
  $('#modalWord').textContent = entry.w;

  // 音标：英式 / 美式分别带标签，对标雅思词汇书排版
  const phParts = [];
  if (entry.uk) phParts.push(`<span class="ph-tag">英</span> ${esc(entry.uk)}`);
  if (entry.us) phParts.push(`<span class="ph-tag">美</span> ${esc(entry.us)}`);
  $('#modalPhonetic').innerHTML = phParts.length ? phParts.join('<span class="ph-sep">·</span>') : '';

  const senses = (entry.senses || []).map(s =>
    `<div class="sense"><span class="pos">${esc(s.pos)}</span><span class="zh">${esc(s.zh)}</span><div class="en">${esc(s.en)}</div></div>`
  ).join('');
  $('#modalSenses').innerHTML = senses;

  let extra = '';
  if (entry.ex && entry.ex.length) {
    extra += '<div class="ex-block"><div class="ex-label">例句</div>' + entry.ex.map(e =>
      `<div class="ex"><div class="ex-en">${esc(e.en)}</div><div class="ex-zh">${esc(e.zh)}</div></div>`
    ).join('') + '</div>';
  }
  if (entry.fam && entry.fam.length) extra += `<div class="fam">词族：${entry.fam.map(esc).join('、')}</div>`;
  if (entry.col && entry.col.length) extra += `<div class="col">搭配：${entry.col.map(esc).join('、')}</div>`;
  if (entry.tip) extra += `<div class="tip">💡 ${esc(entry.tip)}</div>`;
  if (entry.cefr) extra += `<div class="meta-badge">CEFR ${esc(entry.cefr)}</div>`;
  $('#modalExtra').innerHTML = extra;

  const isFav = getFavs().includes(w.toLowerCase());
  $('#modalFav').textContent = isFav ? '✓ 已收藏' : '⭐ 收藏';
  $('#modalFav').classList.toggle('fav-on', isFav);
  $('#modalFav').dataset.chapterId = chapterId || '';
  showModal($('#wordModal'));
  document.body.style.overflow = 'hidden';

  // 朗读发音：优先美音（雅思常听美音），用系统 TTS
  speakWord(entry);
}
function closeWordModal() {
  hideModal($('#wordModal'));
  document.body.style.overflow = '';
  modalWord = null;
}

/* 朗读单词：优先有道词典真人发音（美音），网络音频失败/缺失时回退系统 TTS。
   原因：浏览器 speechSynthesis 依赖本机语音包，国内 Windows 常见无声
   （未装英语语音 / Chrome TTS 卡死 / 微信内置浏览器不支持），
   有道 dictvoice 是国内可直连的 mp3 接口，稳定可靠。 */
let speakAudio = null;      // 当前网络音频
let speakUtterance = null;  // 当前 TTS（回退用）
function stopSpeak() {
  if (speakAudio) { try { speakAudio.pause(); } catch (e) {} speakAudio = null; }
  if (speakUtterance) { try { speechSynthesis.cancel(); } catch (e) {} speakUtterance = null; }
}
function ttsFallback(w) {
  if (!('speechSynthesis' in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(w);
    u.lang = 'en-US';
    u.rate = 0.85;
    const voices = speechSynthesis.getVoices();
    const en = voices.filter(v => /^en[-_]US/i.test(v.lang));
    const enAny = voices.filter(v => /^en[-_]/i.test(v.lang));
    const v = (en[0] || enAny[0] || voices.find(x => /English/i.test(x.name)) || null);
    if (v) u.voice = v;
    speakUtterance = u;
    speechSynthesis.speak(u);
  } catch (e) { /* 忽略：无 TTS 环境静默降级 */ }
}
function speakWord(entry) {
  if (!entry) return;
  stopSpeak();
  const w = String(entry.w || '').trim();
  if (!w) return;
  const btn = $('#modalSpeak');
  if (btn) { btn.classList.remove('muted'); btn.classList.add('speaking'); }
  // 有道美音：type=0 美音 / type=1 英音
  const url = 'https://dict.youdao.com/dictvoice?type=0&audio=' + encodeURIComponent(w);
  const a = new Audio(url);
  let settled = false;
  const clearBtn = () => { if (btn) btn.classList.remove('speaking'); };
  const fallback = () => {
    if (settled) return; settled = true;
    clearBtn(); ttsFallback(w);
  };
  a.addEventListener('error', fallback);   // 词条无音频 / 网络失败
  a.addEventListener('ended', () => { if (speakAudio === a) { speakAudio = null; clearBtn(); } });
  a.play().then(() => { speakAudio = a; }).catch(fallback); // 自动播放被拦也回退 TTS
}
function toggleFavFromModal() {
  if (!modalWord) return;
  toggleFav(modalWord, $('#modalFav').dataset.chapterId || null);
}
function toggleFav(w, chapterId) {
  const key = String(w).toLowerCase();
  let favs = getFavs();
  const on = favs.includes(key);
  if (on) favs = favs.filter(x => x !== key); else favs.push(key);
  setFavs(favs);
  // 更新弹层按钮
  const btn = $('#modalFav');
  if (modalWord && modalWord.toLowerCase() === key) {
    btn.textContent = on ? '⭐ 收藏' : '✓ 已收藏';
    btn.classList.toggle('fav-on', !on);
  }
  updateFavBadges();
  if (state.view === 'vocab') renderFavs();
  if (state.view === 'wordbook') renderWordbookKeepScroll();
}

/* ================= 书架（书库） ================= */
function renderBookshelf() {
  $('#statWords').textContent = WORDS.length + ' 词';
  updateFavBadges();
  const progress = getProgress();
  const list = $('#chapterList');
  const lib = loadLibrary();
  $('#statChapters').textContent = NOVEL.length + ' 章';
  // —— 内置中文书（《遥远的救世主》）——
  const zhSection = (window.JIU_SHI_ZHU && window.JIU_SHI_ZHU.length) ? `
    <div class="shelf-section-title">📚 中文小说 · 中英对照</div>
    <div class="pdf-book-grid">
      <div class="pdf-book-card zh-book-card" data-id="zh_jiushizhu">
        <div class="pdf-book-cover">📖<div class="pdf-book-badge">中→英</div></div>
        <div class="pdf-book-info">
          <div class="pdf-book-title">遥远的救世主</div>
          <div class="pdf-book-meta">${window.JIU_SHI_ZHU.length} 章 · 34 万字 · 豆豆 著</div>
          <div class="pdf-book-sub">阅读时中文词汇自动替换为雅思英语，点击可查词汇书级讲解</div>
          <div class="pdf-book-cov" data-cov="zh_jiushizhu">词库覆盖 <b>${zhCoveragePct()}</b> ›</div>
        </div>
      </div>
    </div>
    <div class="shelf-section-title">✨ 内置书</div>` : '';
  // —— 已导入的 PDF 书 ——
  const pdfSection = lib.length ? `
    <div class="shelf-section-title">📥 我的导入书</div>
    <div class="pdf-book-grid">
      ${lib.map(b => `
      <div class="pdf-book-card" data-id="${esc(b.id)}">
        <div class="pdf-book-cover">${b.type === 'epub' ? '📖' : '📄'}${b.lang === 'zh' ? '<div class="pdf-book-badge">中→英</div>' : ''}</div>
        <div class="pdf-book-info">
          <div class="pdf-book-title">${esc(b.title)}</div>
          <div class="pdf-book-meta">${b.chapterCount} 个章节 · ${b.words} 个雅思词</div>
          ${b.coverage ? `<div class="pdf-book-cov" data-cov="${esc(b.id)}">词库覆盖 <b>${b.coverage.pct}%</b>（${b.coverage.hitCount}/7306）›</div>` : ''}
          <button class="pdf-book-del" data-id="${esc(b.id)}">删除</button>
        </div>
      </div>`).join('')}
    </div>
    <div class="shelf-section-title">✨ 内置书</div>` : '';

  // —— 内置书章节 ——
  list.innerHTML = zhSection + pdfSection + NOVEL.map((ch, i) => {
    const done = progress[ch.id] && progress[ch.id].done;
    const last = progress[ch.id] && progress[ch.id].last;
    const isFirst = i === 0;
    const unlocked = isFirst || (progress[NOVEL[i-1].id] && progress[NOVEL[i-1].id].done);
    const pct = last != null ? Math.round((last / ch.paragraphs.length) * 100) : 0;
    return `
    <div class="chapter-card ${unlocked ? '' : 'locked'}" data-chapter="${ch.id}">
      <div class="ch-index">${String(i+1).padStart(2,'0')}</div>
      <div class="ch-main">
        <div class="ch-title serif">${esc(ch.title)}</div>
        <div class="ch-sub">${esc(ch.subtitle)}</div>
        <div class="ch-meta">${ch.vocabKeys.length} 个核心词${done ? ' · 已读完 ✓' : (pct > 0 ? ` · 读到 ${pct}%` : '')}</div>
        ${unlocked ? '' : '<div class="ch-lock">🔒 完成上一章解锁</div>'}
      </div>
      <div class="ch-arrow">${unlocked ? '›' : ''}</div>
    </div>`;
  }).join('');

  // —— 导入 PDF/EPUB 卡片（始终存在）——
  const importCard = document.createElement('div');
  importCard.className = 'import-card';
  importCard.innerHTML = `
    <div class="import-icon">📄</div>
    <div class="import-text">
      <div class="import-title">导入书籍（PDF / EPUB）</div>
      <div class="import-sub">英文书自动挖雅思词；中文书自动把命中词的中文释义替换成英文单词（可点查释义）</div>
    </div>
    <input type="file" id="pdfInput" accept="application/pdf,.pdf,application/epub+zip,.epub" hidden>`;
  list.appendChild(importCard);
  const pdfInput = $('#pdfInput');
  pdfInput.addEventListener('change', e => {
    pdfInput.value = '';  // 允许重复选同一个文件
    if (e.target.files && e.target.files[0]) handlePdfImport(e.target.files[0]);
  });
  // 点卡片 → 触发隐藏的文件选择器（此前缺失，导致"点导入没反应"）
  importCard.addEventListener('click', () => { if (pdfInput) pdfInput.click(); });

  // PDF 书卡片点击 / 删除 / 覆盖率
  list.querySelectorAll('.pdf-book-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.pdf-book-del')) {
        if (confirm('确定删除这本导入书？')) deletePdfBook(card.dataset.id);
        return;
      }
      if (e.target.closest('.pdf-book-cov')) {
        if (card.dataset.id === 'zh_jiushizhu') {
          openZhBookCoverage();
          return;
        }
        openCoverageModal(card.dataset.id);
        return;
      }
      if (card.dataset.id === 'zh_jiushizhu') { openZhBook(); return; }
      openPdfBook(card.dataset.id);
    });
  });

  // 内置章节点击
  list.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.chapter;
      const i = NOVEL.findIndex(c => c.id === id);
      if (i === 0 || (getProgress()[NOVEL[i-1].id] && getProgress()[NOVEL[i-1].id].done)) {
        openChapter(id);
      } else {
        toast('先读完上一章解锁哦');
      }
    });
  });
}

function deletePdfBook(id) {
  const lib = loadLibrary().filter(b => b.id !== id);
  saveLibrary(lib);
  idbDelete('book_' + id).catch(() => {});
  if (state.pdfBook && state.pdfBook.id === id) { state.pdfBook = null; }
  toast('已删除');
  renderBookshelf();
}

/* ================= PDF 导入 ================= */
function showImportProgress(msg, pct) {
  let bar = $('#importProgress');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'importProgress';
    bar.className = 'import-progress';
    document.body.appendChild(bar);
  }
  bar.innerHTML = `<div class="import-progress-inner"><span class="import-msg">${esc(msg)}</span><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></div>`;
  bar.hidden = false;
}
function hideImportProgress() { const b = $('#importProgress'); if (b) b.hidden = true; }

/* ================= PDF / EPUB 导入 ================= */

// 判断文本主体是否为中文（中文字符占比 > 5% 即视为中文书）
function isChineseText(text) {
  if (!text) return false;
  const sample = text.slice(0, Math.min(text.length, 2000));
  const zhCount = (sample.match(/[\u4e00-\u9fa5]/g) || []).length;
  return zhCount / sample.length > 0.05;
}

// 按语言扫描：中文书 → scanZh（中文释义替换成英文）；英文书 → scan（英文词形挖空）
function scanForLang(chText, index, minCefr, lang) {
  if (lang === 'zh') return Lexer.scanZh(chText, { index: index, minCefr: minCefr });
  return Lexer.scan(chText, { index: index, minCefr: minCefr });
}

function handlePdfImport(file) {
  if (!file) return;
  if (!/\.(pdf|epub)$/i.test(file.name)) { toast('请选择 PDF 或 EPUB 文件'); return; }
  if (file.size > 60 * 1024 * 1024) { toast('文件超过 60MB，请压缩后导入'); return; }

  if (/\.epub$/i.test(file.name)) { handleEpubImport(file); return; }

  showImportProgress('正在解析 PDF…', 8);

  // PDF 库懒加载：未加载先补加载（启动时不再预加载，省首屏）
  if (!window.pdfjsLib) {
    showImportProgress('正在加载 PDF 引擎…', 4);
    loadOptionalScript('data/pdf.min.js').then(() => {
      if (!window.pdfjsLib) { hideImportProgress(); toast('PDF 引擎加载失败，请检查网络后重试'); return; }
      parsePdfFile(file);
    }, () => { hideImportProgress(); toast('PDF 引擎加载失败，请检查网络后重试'); });
    return;
  }
  parsePdfFile(file);
}

// 可选依赖（PDF/EPUB 引擎）运行时懒加载：启动不预载，用到才取
function loadOptionalScript(src) {
  return new Promise(function (res, rej) {
    var s = document.createElement('script');
    s.src = src; s.async = false;
    s.onload = res;
    s.onerror = function () { rej(new Error(src)); };
    document.head.appendChild(s);
  });
}

function parsePdfFile(file) {
  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const pdfjs = window.pdfjsLib;
      if (!pdfjs) throw new Error('pdfjs 未加载');
      pdfjs.GlobalWorkerOptions.workerSrc = 'data/pdf.worker.min.js';
      const buf = reader.result;
      const pdf = await pdfjs.getDocument({ data: buf }).promise;
      const totalPages = pdf.numPages;
      showImportProgress(`正在提取文本（共 ${totalPages} 页）…`, 15);

      // 逐页提取文本
      const pageTexts = [];
      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const tc = await page.getTextContent();
        const text = tc.items.map(it => it.str).join(' ');
        pageTexts.push(text);
        if (i % 5 === 0 || i === totalPages) {
          showImportProgress(`正在提取文本（第 ${i}/${totalPages} 页）…`, 15 + Math.round(i / totalPages * 55));
        }
      }
      const fullText = pageTexts.join('\n\n');

      // 分章：按段落/页聚合，每章约 3 页或按双换行切
      const chapters = splitIntoChapters(pageTexts);
      showImportProgress('正在扫描雅思词汇并自动挖空…', 72);

      // 自动挖空：对每章文本扫描词库（CEFR 按设置过滤）；中文书走"中→英替换"链路
      const index = Lexer.buildIndex(WORDS);
      const minCefr = state.importLevel;
      const lang = isChineseText(chapters.map(c => c.text).join('\n')) ? 'zh' : 'en';
      const chapterData = chapters.map((ch, ci) => {
        const hits = scanForLang(ch.text, index, minCefr, lang);
        return {
          id: 'pdf' + ci,
          title: ch.title || `第 ${ci+1} 部分`,
          text: ch.text,
          hits: hits,
          lang: lang,
          words: new Set(hits.map(h => h.lemma.toLowerCase())).size
        };
      });

      const bookId = 'pdf_' + Date.now();
      const book = {
        id: bookId,
        type: 'pdf',
        title: file.name.replace(/\.pdf$/i, ''),
        subtitle: `${totalPages} 页 · ${pageTexts.reduce((s,p)=>s+p.length,0)} 字${lang === 'zh' ? ' · 中文替换' : ''}`,
        chapterCount: chapterData.length,
        lang: lang,
        words: new Set(chapterData.reduce((a,c)=>a.concat(c.hits.map(h=>h.lemma.toLowerCase())),[])).size,
        coverage: computeCoverage(chapterData),
        createdAt: Date.now()
      };

      // 存正文（IndexedDB）+ 元信息（localStorage）
      // 注意：store 的 keyPath 是 'id'，put 时 key 取 val.id，
      // 因此这里必须把 id 存成带 'book_' 前缀的形式，与 idbGet/idbDelete 的 key 一致
      await idbPut('book_' + bookId, { id: 'book_' + bookId, chapters: chapterData });
      const lib = loadLibrary();
      lib.unshift(book);
      saveLibrary(lib);

      showImportProgress('完成！', 100);
      setTimeout(hideImportProgress, 600);
      toast(`导入成功：${book.title}（${book.words} 个雅思词）`);
      renderBookshelf();
      openPdfBook(bookId);
    } catch (err) {
      console.error(err);
      hideImportProgress();
      toast('PDF 解析失败：' + (err.message || err));
    }
  };
  reader.onerror = () => { hideImportProgress(); toast('读取文件失败'); };
  reader.readAsArrayBuffer(file);
}

/* ================= EPUB 导入 ================= */
// HTML → 纯文本：去掉 script/style，块级标签转换行，其余标签去标签
function htmlToText(html) {
  const d = document.createElement('div');
  d.innerHTML = html;
  // 移除 script/style/nav 导航
  d.querySelectorAll('script, style, nav, aside, .toc, #toc, .contents').forEach(el => el.remove());
  // 块级元素 → 换行
  d.querySelectorAll('p, div, h1, h2, h3, h4, h5, h6, li, br, blockquote, section, article').forEach(el => {
    if (el.tagName === 'BR') { el.replaceWith('\n'); return; }
    el.appendChild(document.createTextNode('\n'));
  });
  const txt = d.textContent
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return txt;
}

function handleEpubImport(file) {
  // JSZip 懒加载：启动不预载，导入 EPUB 时才取
  if (!window.JSZip) {
    showImportProgress('正在加载 EPUB 引擎…', 4);
    loadOptionalScript('data/jszip.min.js').then(() => {
      if (!window.JSZip) { hideImportProgress(); toast('EPUB 引擎加载失败，请检查网络后重试'); return; }
      parseEpubFile(file);
    }, () => { hideImportProgress(); toast('EPUB 引擎加载失败，请检查网络后重试'); });
    return;
  }
  parseEpubFile(file);
}

function parseEpubFile(file) {
  showImportProgress('正在解压 EPUB…', 10);
  const reader = new FileReader();
  reader.onload = async () => {
    try {
      if (!window.JSZip) throw new Error('JSZip 未加载');
      const zip = await JSZip.loadAsync(reader.result);
      showImportProgress('正在解析章节…', 30);

      // 找出所有正文 HTML（按文件名排序），排除封面/目录等
      const htmlEntries = Object.keys(zip.files)
        .filter(n => /\.(x?html?|xht)$/i.test(n) && !zip.files[n].dir)
        .sort();

      // 识别 spine（阅读顺序），没有则按文件名
      let order = htmlEntries.slice();
      const containerPath = Object.keys(zip.files).find(n => /META-INF\/container\.xml$/i.test(n));
      if (containerPath) {
        try {
          const containerXml = await zip.files[containerPath].async('string');
          const opfMatch = containerXml.match(/full-path="([^"]+)"/i);
          if (opfMatch) {
            const opf = await zip.files[opfMatch[1]].async('string');
            const idmap = {};
            const idrefs = [];
            // manifest: 兼容 id/href 任意属性顺序（用全局属性捕获）
            const manifestRe = /<item\s+([^>]*)>/gi;
            let m;
            while ((m = manifestRe.exec(opf))) {
              const attrs = m[1];
              const id = (attrs.match(/\bid="([^"]+)"/i) || [])[1];
              const href = (attrs.match(/\bhref="([^"]+)"/i) || [])[1];
              if (id && href) idmap[id.toLowerCase()] = href.toLowerCase();
            }
            // spine: idref 顺序
            const spineRe = /<itemref\s+[^>]*idref="([^"]+)"/gi;
            while ((m = spineRe.exec(opf))) idrefs.push(m[1].toLowerCase());
            const ordered = idrefs.map(id => idmap[id]).filter(Boolean);
            if (ordered.length) order = ordered;
          }
        } catch (e) { /* 解析失败就用文件名排序 */ }
      }

      // 逐章提取文本
      const chapterTexts = [];
      const seen = new Set();
      for (const relPath of order) {
        const entry = zip.files[relPath];
        if (!entry || entry.dir) continue;
        // 目录/封面/版权页跳过
        const fn = relPath.toLowerCase();
        if (/cover|toc|contents|copyright|title/i.test(fn)) continue;
        const lower = relPath.toLowerCase().replace(/^.*[\\/]/, '');
        if (seen.has(lower)) continue;
        seen.add(lower);
        const html = await entry.async('string');
        const text = htmlToText(html);
        if (text.length < 50) continue; // 跳过空页
        // 目录页检测：短文本 + 大量"第X章/章"标题行 或 明确的目录关键词
        if (text.length < 4000 && /(目录|contents)/i.test(text) && (text.match(/第[一二三四五六七八九十百0-9]+[章节]/g) || []).length >= 3) continue;
        // 扉页/版权页检测：短文本 + 无章节标题 + 含版权特征（作者/出版社/版权所有）
        if (text.length < 300 && !/第[一二三四五六七八九十百0-9]+[章节]/.test(text) &&
            /(著|出版社|版权|author|publisher|copyright|isbn)/i.test(text)) continue;
        chapterTexts.push({ title: inferChapterTitle(html, text), text: text });
        if (chapterTexts.length % 10 === 0) {
          showImportProgress(`已解析 ${chapterTexts.length} 章…`, 30 + Math.min(35, chapterTexts.length * 3));
        }
      }

      if (!chapterTexts.length) { hideImportProgress(); toast('EPUB 中没有可读正文'); return; }

      showImportProgress('正在扫描雅思词汇并自动挖空…', 72);
      const index = Lexer.buildIndex(WORDS);
      const minCefr = state.importLevel;
      const lang = isChineseText(chapterTexts.map(c => c.text).join('\n')) ? 'zh' : 'en';
      const chapterData = chapterTexts.map((ch, ci) => {
        const hits = scanForLang(ch.text, index, minCefr, lang);
        return {
          id: 'pdf' + ci,
          title: ch.title || `第 ${ci+1} 部分`,
          text: ch.text,
          hits: hits,
          lang: lang,
          words: new Set(hits.map(h => h.lemma.toLowerCase())).size
        };
      });

      const bookId = 'pdf_' + Date.now();
      const book = {
        id: bookId,
        type: 'epub',
        title: file.name.replace(/\.epub$/i, ''),
        subtitle: `${chapterTexts.length} 章 · ${chapterTexts.reduce((s,c)=>s+c.text.length,0)} 字${lang === 'zh' ? ' · 中文替换' : ''}`,
        chapterCount: chapterData.length,
        lang: lang,
        words: new Set(chapterData.reduce((a,c)=>a.concat(c.hits.map(h=>h.lemma.toLowerCase())),[])).size,
        coverage: computeCoverage(chapterData),
        createdAt: Date.now()
      };

      await idbPut('book_' + bookId, { id: 'book_' + bookId, chapters: chapterData });
      const lib = loadLibrary();
      lib.unshift(book);
      saveLibrary(lib);

      showImportProgress('完成！', 100);
      setTimeout(hideImportProgress, 600);
      toast(`导入成功：${book.title}（${book.words} 个雅思词）`);
      renderBookshelf();
      openPdfBook(bookId);
    } catch (err) {
      console.error(err);
      hideImportProgress();
      toast('EPUB 解析失败：' + (err.message || err));
    }
  };
  reader.onerror = () => { hideImportProgress(); toast('读取文件失败'); };
  reader.readAsArrayBuffer(file);
}

// 从章节 HTML 推断标题：优先 <title>/<h1-h3>，否则取首行
function inferChapterTitle(html, text) {
  // 从正文中优先找章节标题模式（第X章/Chapter X）
  const chapterMatch = text.match(/^\s*(第[一二三四五六七八九十百0-9]+[章节卷部篇回]|[Cc]hapter\s+\d+|CHAPTER\s+\d+)[\s：:]*.*$/m);
  if (chapterMatch) {
    const line = chapterMatch[0].trim().slice(0, 40);
    if (line) return line;
  }
  // 兜底1：h1-h4 标签（排除占位 title）
  const d = document.createElement('div');
  d.innerHTML = html;
  const h = d.querySelector('h1,h2,h3,h4');
  const t = h ? h.textContent.trim() : '';
  if (t && t.length < 40 && !/^(未知|unnamed|untitled|none)$/i.test(t)) return t;
  // 兜底2：首个非空行
  const firstLine = text.split('\n').find(l => l.trim().length > 0);
  const fl = (firstLine ? firstLine.trim() : '');
  if (fl && !/^(未知|unnamed|untitled|none)$/i.test(fl)) return fl.slice(0, 40);
  return '';
}

function splitIntoChapters(pageTexts) {
  // 简单分章：每 3 页一章；若整本 ≤ 6 页则 2 页一章；标题取首行
  const per = pageTexts.length <= 6 ? 2 : 3;
  const chapters = [];
  for (let i = 0; i < pageTexts.length; i += per) {
    const slice = pageTexts.slice(i, i + per);
    const text = slice.join('\n\n');
    const firstLine = text.split('\n')[0].slice(0, 40) || '';
    chapters.push({ title: firstLine ? firstLine.trim() : `第 ${chapters.length+1} 部分`, text: text });
  }
  return chapters;
}

/* ================= PDF 书阅读 ================= */
async function openPdfBook(bookId) {
  const book = getBook(bookId);
  if (!book) { toast('书不存在'); return; }
  const data = await idbGet('book_' + bookId);
  if (!data) { toast('正文数据缺失'); return; }
  state.pdfBook = { id: bookId, book: book, chapters: data.chapters };
  state.pdfChapter = 0;
  openPdfChapter(0);
}

function openPdfChapter(idx) {
  if (!state.pdfBook) return;
  const { book, chapters } = state.pdfBook;
  const ch = chapters[idx];
  if (!ch) return;
  state.pdfChapter = idx;
  const unit = (book.lang === 'zh' || book.type === 'builtin-zh') ? '章' : '部分';

  // 阅读头
  $('#pdfHeader').innerHTML = `
    <div class="reader-title serif">${esc(book.title)}</div>
    <div class="reader-sub">${esc(ch.title)}</div>
    <div class="reader-actions">
      <button class="btn-ghost" id="btnPdfQuiz">📝 本章测试</button>
      <span class="reader-ch">第 ${idx+1} / ${chapters.length} ${unit}</span>
    </div>`;

  // 正文（三模式渲染：bilingual 中英注释 / english 纯英文 / plain 全英文）
  const chLang = ch.lang || 'en';
  const isZh = chLang === 'zh' || book.type === 'builtin-zh';
  $('#pdfBody').innerHTML = `<div class="para">${renderPdfParagraph(ch, isZh)}</div>`;

  // 翻页
  $('#pdfFooter').innerHTML = `
    <div class="reader-nav">
      ${idx > 0 ? '<button class="btn-ghost small" id="pdfPrev">‹ 上一' + unit + '</button>' : ''}
      ${idx < chapters.length - 1 ? '<button class="btn-primary" id="pdfNext">下一' + unit + ' ›</button>' : '<div class="the-end">— 已到末尾 —</div>'}
    </div>`;

  const btnPrev = $('#pdfPrev'); if (btnPrev) btnPrev.addEventListener('click', () => openPdfChapter(idx - 1));
  const btnNext = $('#pdfNext'); if (btnNext) btnNext.addEventListener('click', () => openPdfChapter(idx + 1));
  $('#btnPdfQuiz').addEventListener('click', startPdfQuiz);

  // 点词
  $('#pdfBody').addEventListener('click', e => {
    const el = e.target.closest('.word-tag, .blank-tag');
    if (el) openWordModal(el.dataset.word);
  });

  // 模式切换
  setupReaderModeToggle('pdf');
  showView('pdfreader');
}

function renderPdfParagraph(ch, isZh, mode) {
  mode = mode || state.mode;
  if (!ch) return '';
  const text = ch.text || '';
  const hits = ch.hits || [];
  // 全英文模式：中文书 → 整章翻译；英文书 → 原样（无高亮）
  if (mode === 'plain') {
    if (isZh) {
      // 异步翻译：先占位，翻译完成替换（懒加载 + 缓存 + 去重）
      const holderId = 'trans-' + (ch.id || 'c');
      const bookId = (state.pdfBook && state.pdfBook.book && state.pdfBook.book.id) || 'zh';
      if (!window.__transPending) window.__transPending = {};
      if (!window.__transPending[holderId]) {
        window.__transPending[holderId] = true;
        getZhChapterTranslation(ch, bookId).then(en => {
          window.__transPending[holderId] = false;
          const holder = document.getElementById(holderId);
          if (holder) holder.innerHTML = esc(en).replace(/\n/g, '<br>');
        }).catch(() => {
          window.__transPending[holderId] = false;
          const holder = document.getElementById(holderId);
          if (holder) holder.innerHTML = '<span class="trans-fail">翻译失败：请检查网络，稍后切换模式重试。</span>';
        });
      }
      return `<span id="${holderId}" class="trans-loading">⏳ 正在翻译本${(state.pdfBook && state.pdfBook.book.type === 'builtin-zh') ? '章' : '部分'}…（仅首次，之后秒开）</span>`;
    }
    return esc(text).replace(/\n/g, '<br>');
  }
  // 中英注释 / 纯英文：lexer 已兼容 bilingual/english 新名
  if (isZh) return Lexer.renderZhHits(text, hits, mode);
  return Lexer.renderHits(text, hits, mode);
}

function setupReaderModeToggle(which) {
  const toggle = $('#modeToggle');
  toggle.hidden = false;
  toggle.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === state.mode);
    b.onclick = () => {
      state.mode = b.dataset.mode;
      const s = getSettings(); s.mode = state.mode; save(LS.SETTINGS, s);
      toggle.querySelectorAll('.mode-btn').forEach(x => x.classList.toggle('active', x.dataset.mode === state.mode));
      const scrollY = window.scrollY;
      if (which === 'pdf' && state.pdfBook) {
        const ch = state.pdfBook.chapters[state.pdfChapter];
        const isZh = ch.lang === 'zh' || state.pdfBook.book.type === 'builtin-zh';
        $('#pdfBody').innerHTML = `<div class="para">${renderPdfParagraph(ch, isZh)}</div>`;
      } else {
        const ch = NOVEL.find(c => c.id === state.chapterId);
        $('#readerBody').innerHTML = ch.paragraphs.map(p => `<div class="para">${renderParagraph(p, state.mode)}</div>`).join('');
      }
      window.scrollTo(0, scrollY);
    };
  });
}

/* ================= PDF 本章测试 ================= */
function startPdfQuiz() {
  if (!state.pdfBook) return;
  const ch = state.pdfBook.chapters[state.pdfChapter];
  const hits = ch.hits || [];
  if (hits.length < 4) { toast('本章雅思词太少，不足 4 个无法出题'); return; }
  // 去重后取前 10 个词
  const seen = new Set();
  const lemmas = [];
  hits.forEach(h => { const k = h.lemma.toLowerCase(); if (!seen.has(k)) { seen.add(k); lemmas.push(h.lemma); } });
  const sample = shuffle(lemmas).slice(0, Math.min(10, lemmas.length));
  const questions = sample.map(word => {
    const entry = getWord(word);
    const correct = entry.senses.map(s => s.zh).join('；');
    const extra = [];
    while (extra.length < 3) {
      const r = WORDS[Math.floor(Math.random() * WORDS.length)];
      const zh = (r.senses||[]).map(s=>s.zh).join('；');
      if (zh && zh !== correct && !extra.includes(zh)) extra.push(zh);
    }
    return { word, correct, options: shuffle([correct, ...extra]) };
  });
  state.quiz = {
    ch: { id: 'pdf', title: bookLabel(state.pdfBook.book.title) + ' · ' + ch.title },
    questions,
    idx: 0,
    correct: 0,
    answered: false,
    isPdf: true
  };
  renderQuiz();
  showModal($('#quizModal'));
  document.body.style.overflow = 'hidden';
}
function bookLabel(t) { return t.length > 18 ? t.slice(0, 18) + '…' : t; }

/* ================= 阅读（内置书） ================= */
function openChapter(id) {
  state.chapterId = id;
  const ch = NOVEL.find(c => c.id === id);
  const i = NOVEL.findIndex(c => c.id === id);
  const progress = getProgress();

  $('#readerHeader').innerHTML = `
    <div class="reader-title serif">${esc(ch.title)}</div>
    <div class="reader-sub">${esc(ch.subtitle)}</div>
    <div class="reader-intro">${esc(ch.intro)}</div>
    <div class="reader-actions">
      <button class="btn-ghost" id="btnQuiz">📝 本章测试</button>
      <span class="reader-ch">第 ${i+1} / ${NOVEL.length} 章</span>
    </div>`;

  $('#readerBody').innerHTML = ch.paragraphs.map(p => `<div class="para">${renderParagraph(p, state.mode)}</div>`).join('');

  $('#readerFooter').innerHTML = `
    ${i < NOVEL.length - 1 ? '<button class="btn-primary" id="btnNext">下一章 ›</button>' : '<div class="the-end">— 全文完 —</div>'}
    <div class="reader-nav">
      ${i > 0 ? '<button class="btn-ghost small" id="btnPrev">‹ 上一章</button>' : ''}
    </div>`;

  // 事件
  $('#btnQuiz').addEventListener('click', startQuiz);
  const btnNext = $('#btnNext');
  if (btnNext) btnNext.addEventListener('click', () => {
    const p = getProgress();
    if (!p[ch.id] || !p[ch.id].done) {
      p[ch.id] = Object.assign({}, p[ch.id], { done: true });
      save(LS.PROGRESS, p);
    }
    openChapter(NOVEL[i+1].id);
  });
  const btnPrev = $('#btnPrev');
  if (btnPrev) btnPrev.addEventListener('click', () => openChapter(NOVEL[i-1].id));

  // 点词（全文模式 .word-tag / 挖空模式 .blank-tag）
  $('#readerBody').addEventListener('click', e => {
    const el = e.target.closest('.word-tag, .blank-tag');
    if (el) {
      openWordModal(el.dataset.word, ch.id);
    }
  });

  // 模式切换
  setupReaderModeToggle('builtin');

  showView('reader');
}

function renderParagraph(text, mode) {
  // 全英文模式：原样输出英文（保留 [word] 标记去掉，作为纯阅读）
  if (mode === 'plain') {
    return esc(text.replace(/\[([a-z]+)\]/g, '$1')).replace(/\n/g, '<br>');
  }
  // 解析 [word] 标记
  let html = '';
  let last = 0;
  const re = /\[([a-z]+)\]/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    html += esc(text.slice(last, m.index));
    const word = m[1];
    const entry = getWord(word);
    if (mode === 'english' || mode === 'blanks') {
      // 纯英文：高亮可点，无中文注释
      html += `<span class="word-tag" data-word="${esc(word)}">${esc(word)}</span>`;
    } else {
      // 中英注释：英文 + 中文小字
      const zh = (entry && entry.senses && entry.senses[0]) ? entry.senses[0].zh : '';
      html += `<span class="word-tag" data-word="${esc(word)}">${esc(word)}</span>` +
              (zh ? `<span class="zh-tip">${esc(zh)}</span>` : '');
    }
    last = m.index + m[0].length;
  }
  html += esc(text.slice(last));
  return html;
}

/* ================= 生词本 ================= */
let favFilterChapter = 'all';
function renderFavs() {
  updateFavBadges();
  const favs = getFavs();
  const filter = $('#favFilter');
  filter.innerHTML = `<button class="chip ${favFilterChapter==='all'?'on':''}" data-f="all">全部</button>` +
    NOVEL.map(ch => `<button class="chip ${favFilterChapter===ch.id?'on':''}" data-f="${ch.id}">${ch.title.replace(/^Chapter \d+: /,'').slice(0,8)}</button>`).join('');
  filter.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
    favFilterChapter = c.dataset.f;
    renderFavs();
  }));

  let items = favs.map(w => ({ w, entry: getWord(w) })).filter(x => x.entry);
  if (favFilterChapter !== 'all') {
    const keys = NOVEL.find(c => c.id === favFilterChapter).vocabKeys.map(k => k.toLowerCase());
    items = items.filter(x => keys.includes(x.w));
  }

  const list = $('#favList');
  if (!items.length) {
    list.innerHTML = `<div class="empty">${favFilterChapter === 'all' ? '还没有收藏单词\n去阅读页点 ⭐ 收藏' : '本章还没有收藏的单词'}</div>`;
    return;
  }
  list.innerHTML = items.map(({ w, entry }) => `
    <div class="fav-item" data-word="${esc(entry.w)}">
      <div class="fav-word serif">${esc(entry.w)}</div>
      <div class="fav-zh">${esc((entry.senses||[]).map(s=>s.zh).join('；'))}</div>
      <div class="fav-op">
        <span class="fav-ph">${esc(entry.uk || '')}</span>
        <button class="fav-del" data-word="${esc(entry.w)}">取消</button>
      </div>
    </div>`).join('');
  list.querySelectorAll('.fav-item').forEach(item => {
    item.addEventListener('click', e => {
      if (e.target.closest('.fav-del')) {
        toggleFav(item.dataset.word);
      } else {
        openWordModal(item.dataset.word);
      }
    });
  });
}

/* ================= 词汇书 ================= */
const CEFR_ORDER = ['A1','A2','B1','B2','C1','C2'];
function renderWordbook() {
  updateWbCount();
  // CEFR 筛选条
  const filter = $('#cefrFilter');
  filter.innerHTML = `<button class="chip ${state.wbCefr==='all'?'on':''}" data-c="all">全部</button>` +
    CEFR_ORDER.map(c => `<button class="chip ${state.wbCefr===c?'on':''}" data-c="${c}">${c}</button>`).join('');
  filter.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
    state.wbCefr = c.dataset.c;
    state.wbPage = 0;
    state.wbResults = [];
    renderWordbook();
  }));

  const term = state.wbSearchTerm.trim().toLowerCase();
  let results;
  if (term) {
    results = WORDS.filter(w =>
      w.w.toLowerCase().includes(term) ||
      (w.senses || []).some(s => (s.zh || '').includes(state.wbSearchTerm.trim()))
    );
  } else if (state.wbCefr !== 'all') {
    results = WORDS.filter(w => w.cefr === state.wbCefr);
  } else {
    results = WORDS;
  }
  state.wbResults = results;

  renderWbChunk();
}
function renderWbChunk(append) {
  const list = $('#wordbookList');
  if (!append) list.innerHTML = ''; // 搜索/筛选切换时清空；加载更多时不清空（追加）
  const start = state.wbPage * state.wbPageSize;
  const chunk = state.wbResults.slice(start, start + state.wbPageSize);
  const total = state.wbResults.length;
  updateWbCount(total);

  if (!total) {
    list.innerHTML = `<div class="empty">没有找到相关单词，换个词试试</div>`;
    $('#wbLoadMore').innerHTML = '';
    return;
  }
  const frag = document.createDocumentFragment();
  chunk.forEach(w => {
    const div = document.createElement('div');
    div.className = 'wb-item';
    div.dataset.word = w.w;
    div.innerHTML = `
      <div class="wb-left">
        <div class="wb-word serif">${esc(w.w)}</div>
        <div class="wb-ph">${esc(w.uk || w.us || '')}</div>
      </div>
      <div class="wb-mid">
        <div class="wb-zh">${esc((w.senses||[]).slice(0,2).map(s=>s.zh).join('；'))}</div>
        <div class="wb-pos">${esc((w.senses||[]).map(s=>s.pos).join(' '))}${w.cefr ? ' · CEFR ' + esc(w.cefr) : ''}</div>
      </div>
      <div class="wb-right">
        ${getFavs().includes(w.w.toLowerCase()) ? '<span class="fav-star">★</span>' : ''}
      </div>`;
    div.addEventListener('click', () => openWordModal(w.w));
    frag.appendChild(div);
  });
  list.appendChild(frag);

  const hasMore = start + state.wbPageSize < total;
  $('#wbLoadMore').innerHTML = hasMore
    ? `<button class="btn-ghost" id="wbMore">加载更多（已显示 ${Math.min(start + chunk.length, total)}/${total}）</button>`
    : (state.wbSearchTerm || state.wbCefr !== 'all' ? `<div class="wb-count">共 ${total} 个单词</div>` : `<div class="wb-count">已显示全部 ${total} 词</div>`);
  const moreBtn = $('#wbMore');
  if (moreBtn) moreBtn.addEventListener('click', () => {
    state.wbPage++;
    renderWbChunk(true); // 追加模式
  });
}
function renderWordbookKeepScroll() {
  // 收藏切换后重绘：保留已加载的所有页（0 ~ wbPage），更新 ★ 标记
  const list = $('#wordbookList');
  list.innerHTML = '';
  const total = state.wbResults.length;
  updateWbCount(total);
  if (!total) {
    list.innerHTML = `<div class="empty">没有找到相关单词，换个词试试</div>`;
    $('#wbLoadMore').innerHTML = '';
    return;
  }
  const frag = document.createDocumentFragment();
  for (let p = 0; p <= state.wbPage; p++) {
    const start = p * state.wbPageSize;
    const chunk = state.wbResults.slice(start, start + state.wbPageSize);
    if (!chunk.length) break;
    chunk.forEach(w => {
      const div = document.createElement('div');
      div.className = 'wb-item';
      div.dataset.word = w.w;
      div.innerHTML = `
        <div class="wb-left">
          <div class="wb-word serif">${esc(w.w)}</div>
          <div class="wb-ph">${esc(w.uk || w.us || '')}</div>
        </div>
        <div class="wb-mid">
          <div class="wb-zh">${esc((w.senses||[]).slice(0,2).map(s=>s.zh).join('；'))}</div>
          <div class="wb-pos">${esc((w.senses||[]).map(s=>s.pos).join(' '))}${w.cefr ? ' · CEFR ' + esc(w.cefr) : ''}</div>
        </div>
        <div class="wb-right">
          ${getFavs().includes(w.w.toLowerCase()) ? '<span class="fav-star">★</span>' : ''}
        </div>`;
      div.addEventListener('click', () => openWordModal(w.w));
      frag.appendChild(div);
    });
  }
  list.appendChild(frag);
  const start = state.wbPage * state.wbPageSize;
  const hasMore = start + state.wbPageSize < total;
  $('#wbLoadMore').innerHTML = hasMore
    ? `<button class="btn-ghost" id="wbMore">加载更多（已显示 ${Math.min((state.wbPage+1) * state.wbPageSize, total)}/${total}）</button>`
    : (state.wbSearchTerm || state.wbCefr !== 'all' ? `<div class="wb-count">共 ${total} 个单词</div>` : `<div class="wb-count">已显示全部 ${total} 词</div>`);
  const moreBtn = $('#wbMore');
  if (moreBtn) moreBtn.addEventListener('click', () => {
    state.wbPage++;
    renderWbChunk(true);
  });
}
function updateWbCount(n) {
  const total = n == null ? state.wbResults.length : n;
  $('#wbCount').textContent = total ? total + ' 词' : '—';
}
function updateFavBadges() {
  const n = getFavs().length;
  $('#statFav').textContent = n + ' 收藏';
  $('#favCount').textContent = n;
  $('#mFav').textContent = n;
}

/* ================= 测试 ================= */
function startQuiz() {
  const ch = NOVEL.find(c => c.id === state.chapterId);
  const keys = ch.vocabKeys;
  const questions = keys.map(word => {
    const entry = getWord(word);
    const correct = entry.senses.map(s => s.zh).join('；');
    // 干扰项：随机取词库中其他词的中文释义
    const distractorPool = keys.filter(k => k !== word).map(k => getWord(k).senses.map(s=>s.zh).join('；'));
    const extra = [];
    while (extra.length < 3) {
      const r = WORDS[Math.floor(Math.random() * WORDS.length)];
      const zh = (r.senses||[]).map(s=>s.zh).join('；');
      if (zh && !distractorPool.includes(zh) && !extra.includes(zh)) extra.push(zh);
    }
    const options = shuffle([correct, ...extra]);
    return { word, correct, options };
  });
  state.quiz = {
    ch: ch,
    questions,
    idx: 0,
    correct: 0,
    answered: false,
    isPdf: false
  };
  renderQuiz();
  showModal($('#quizModal'));
  document.body.style.overflow = 'hidden';
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function renderQuiz() {
  const q = state.quiz;
  const c = q.questions[q.idx];
  $('#quizTitle').textContent = `${q.ch.title.replace(/^Chapter \d+: /, '')} · 词汇测试`;
  $('#quizProgress').textContent = `${q.idx + 1}/${q.questions.length}`;
  $('#quizBody').innerHTML = `
    <div class="quiz-word serif">${esc(c.word)}</div>
    <div class="quiz-ph">${esc((getWord(c.word).uk) || '')}</div>
    <div class="quiz-q">选择正确的中文释义：</div>
    <div class="quiz-opts">
      ${c.options.map((opt, i) => `<button class="quiz-opt" data-i="${i}">${esc(opt)}</button>`).join('')}
    </div>`;
  $('#quizBody').querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => pickQuiz(btn));
  });
}
function pickQuiz(btn) {
  const q = state.quiz;
  if (q.answered) return;
  q.answered = true;
  const chosen = q.questions[q.idx];
  const isRight = btn.textContent === chosen.correct;
  if (isRight) q.correct++;
  document.querySelectorAll('.quiz-opt').forEach(b => {
    b.disabled = true;
    if (b.textContent === chosen.correct) b.classList.add('right');
    else if (b === btn) b.classList.add('wrong');
    else b.classList.add('dim');
  });
  setTimeout(() => {
    q.idx++;
    q.answered = false;
    if (q.idx < q.questions.length) {
      renderQuiz();
    } else {
      finishQuiz();
    }
  }, 900);
}
function finishQuiz() {
  const q = state.quiz;
  const score = q.correct;
  const total = q.questions.length;
  const pct = Math.round(score / total * 100);
  const hist = load(LS.QUIZ_HISTORY) || [];
  hist.push({ ch: q.ch.id, chapterTitle: q.ch.title, score, total, pct, at: Date.now() });
  save(LS.QUIZ_HISTORY, hist);
  $('#quizBody').innerHTML = `
    <div class="quiz-done">
      <div class="done-score serif">${score}/${total}</div>
      <div class="done-pct">正确率 ${pct}%</div>
      <div class="done-msg">${pct >= 80 ? '🎉 太棒了！' : pct >= 60 ? '👍 不错，再复习一下' : '💪 加油，回阅读页看看释义'}</div>
      <button class="btn-primary" id="quizRetry">再测一次</button>
      <button class="btn-ghost" id="quizClose2">完成</button>
    </div>`;
  $('#quizRetry').addEventListener('click', () => {
    // 依据测验来源决定重试方式
    if (state.quiz && state.quiz.isPdf) startPdfQuiz();
    else startQuiz();
  });
  $('#quizClose2').addEventListener('click', closeQuiz);
  updateMineStats();
}
function closeQuiz() {
  hideModal($('#quizModal'));
  document.body.style.overflow = '';
  state.quiz = null;
}

/* ================= 我的 ================= */
function renderMine() {
  const hist = load(LS.QUIZ_HISTORY) || [];
  const best = hist.length ? Math.max(...hist.map(h => h.pct)) : null;
  $('#mQuiz').textContent = hist.length;
  $('#mBest').textContent = best != null ? best + '%' : '—';
  const progress = getProgress();
  let cur = 1;
  for (let i = 0; i < NOVEL.length; i++) {
    if (progress[NOVEL[i].id] && progress[NOVEL[i].id].done) cur = i + 1;
  }
  $('#mChapter').textContent = cur;
  const s = getSettings();
  const modeLabel = { bilingual: '中英注释', english: '纯英文', plain: '全英文' }[s.mode] || '中英注释';
  $('#modeDefault').textContent = '当前：' + modeLabel;

  // 挖空难度
  const lv = s.blankLevel || 'A2';
  state.importLevel = lv;
  const row = $('#levelRow');
  if (row) {
    row.querySelectorAll('.chip').forEach(c => {
      c.classList.toggle('on', c.dataset.lv === lv);
      c.onclick = () => {
        const s2 = getSettings();
        s2.blankLevel = c.dataset.lv;
        save(LS.SETTINGS, s2);
        state.importLevel = c.dataset.lv;
        renderMine();
        toast('自动挖空难度：' + (c.dataset.lv === 'A2' ? '基础 A2+' : c.dataset.lv === 'B1' ? '标准 B1+' : '进阶 B2+'));
      };
    });
  }
}
function updateMineStats() { if (state.view === 'mine') renderMine(); }

/* ================= 搜索 ================= */
function setupSearch() {
  const input = $('#wbSearch');
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { state.wbSearchTerm = input.value; state.wbPage = 0; renderWordbook(); }
  });
  $('#wbSearchBtn').addEventListener('click', () => {
    state.wbSearchTerm = input.value; state.wbPage = 0; renderWordbook();
  });
}

/* ================= Toast ================= */
function toast(msg) {
  let t = $('#toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 1800);
}

/* ================= 初始化 ================= */
function init() {
  setupSearch();
  renderBookshelf();

  // Tab 切换
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => showView(tab.dataset.tab));
  });

  // 弹层关闭
  $('#modalClose').addEventListener('click', closeWordModal);
  $('#wordModal').addEventListener('click', e => { if (e.target === $('#wordModal')) closeWordModal(); });
  $('#modalFav').addEventListener('click', toggleFavFromModal);
  // 覆盖率弹层关闭
  $('#coverageClose').addEventListener('click', closeCoverageModal);
  $('#coverageModal').addEventListener('click', e => { if (e.target === $('#coverageModal')) closeCoverageModal(); });
  $('#modalSpeak').addEventListener('click', () => { if (modalWord) { const e = getWord(modalWord); if (e) speakWord(e); } });
  $('#quizClose').addEventListener('click', closeQuiz);
  $('#quizModal').addEventListener('click', e => { if (e.target === $('#quizModal')) closeQuiz(); });

  // 词汇书按钮
  $('#btnBook').addEventListener('click', () => showView('wordbook'));

  // 我的页
  $('#btnReset').addEventListener('click', () => {
    if (confirm('确定清空所有收藏、进度和测试记录？')) {
      [LS.FAVORITES, LS.PROGRESS, LS.QUIZ_HISTORY, LS.SETTINGS].forEach(k => localStorage.removeItem(k));
      state.mode = 'bilingual';
      state.wbPage = 0; state.wbResults = []; state.wbSearchTerm = ''; state.wbCefr = 'all';
      $('#wbSearch').value = '';
      renderBookshelf(); renderMine();
      toast('已清空');
    }
  });
  $('#modeDefault').addEventListener('click', () => {
    const s = getSettings();
    // 旧值迁移 + 三模式轮换：bilingual → english → plain → bilingual
    const cur = { full: 'bilingual', blanks: 'english' }[s.mode] || s.mode || 'bilingual';
    const next = cur === 'bilingual' ? 'english' : cur === 'english' ? 'plain' : 'bilingual';
    s.mode = next;
    save(LS.SETTINGS, s);
    state.mode = next;
    renderMine();
    toast('默认模式已切换为 ' + ({ bilingual: '中英注释', english: '纯英文', plain: '全英文' }[next]));
  });

  // 搜索框清空时恢复
  const input = $('#wbSearch');
  input.addEventListener('input', () => {
    if (!input.value.trim()) { state.wbSearchTerm = ''; state.wbPage = 0; renderWordbook(); }
  });

  // 通知引导加载器：应用已就绪，可隐藏加载遮罩
  window.__APP_READY = true;
}

// 兼容引导加载器异步注入：DOMContentLoaded 可能已触发（异步插 script 时），需立即执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
