# -*- coding: utf-8 -*-
# 转换词光 Word Atlas 词库 → H5 词汇书数据 (data/words.js)
# 来源: https://github.com/designfuchen/word-atlas (CC BY 4.0)
# 输出格式: window.IELTS_WORDS = [ {w, uk, us, senses, ex, col, fam, tip, cefr, topic}, ... ]
import json, io, sys, os

BASE = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(BASE, 'data', 'word-atlas.json')
OUT = os.path.join(BASE, 'data', 'words.js')
NOVEL_VOCAB = os.path.join(BASE, '..', 'ielts-fast-travel-miniprogram', 'data', 'vocab.js')

def load_novel_vocab():
    # 用 node 读取 novel vocab.js 的 module.exports
    import subprocess
    code = "const v=require(%r); console.log(JSON.stringify(v));" % NOVEL_VOCAB
    out = subprocess.check_output([sys.executable.replace('python.exe','node.exe') if False else
        r'C:\Users\Administrator\.workbuddy\binaries\node\versions\22.22.2-6\node.exe',
        '-e', code], text=True)
    return json.loads(out)

def main():
    with io.open(RAW, encoding='utf-8') as f:
        words = json.load(f)
    print('原始词条:', len(words))

    # 精简字段
    slim = []
    for w in words:
        slim.append({
            'w': w['w'],
            'uk': w.get('uk', ''),
            'us': w.get('us', ''),
            'senses': w.get('senses', []),
            'ex': (w.get('ex') or [])[:2],   # 最多保留2条例句
            'col': w.get('col', []),
            'fam': w.get('fam', []),
            'tip': w.get('tip', ''),
            'cefr': w.get('cefr', ''),
            'topic': w.get('topic', ''),
        })

    existing = {w['w'].lower() for w in slim}
    print('精简词条:', len(slim))

    # 合并小说核心词（若词光词表缺失则补入）
    novel_vocab = load_novel_vocab()
    merged = {w['w'].lower(): w for w in slim}
    added = 0
    for word, item in novel_vocab.items():
        wl = word.lower()
        if wl not in existing:
            merged[wl] = {
                'w': item['word'],
                'uk': item['phonetic'].replace('/', ''),
                'us': '',
                'senses': [{'pos': item['pos'], 'zh': item['zh'], 'en': item['def']}],
                'ex': [{'en': item['example'], 'zh': item['exZh']}],
                'col': [], 'fam': [], 'tip': '', 'cefr': '', 'topic': 'novel-core',
            }
            added += 1
    print('小说核心词补入:', added)

    final = [merged[k] for k in sorted(merged)]
    print('最终词条:', len(final))

    # 输出 words.js
    with io.open(OUT, 'w', encoding='utf-8') as f:
        f.write('window.IELTS_WORDS = ')
        json.dump(final, f, ensure_ascii=False, separators=(',', ':'))
        f.write(';\n')
    size = os.path.getsize(OUT) / 1024 / 1024
    print('输出: %s (%.1f MB)' % (OUT, size))

if __name__ == '__main__':
    main()
