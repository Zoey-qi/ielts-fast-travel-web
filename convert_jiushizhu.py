#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把《遥远的救世主》EPUB 转成网站内置书数据（data/jiushizhu.js）"""
import zipfile, re, html, json, os

EPUB = r"C:/Users/Administrator/Downloads/遥远的救世主 (豆豆) (z-library.sk, 1lib.sk, z-lib.sk).epub"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data', 'jiushizhu.js')

def strip_html(raw):
    raw = re.sub(r'<head.*?</head>', '', raw, flags=re.S)
    raw = re.sub(r'<style.*?</style>', '', raw, flags=re.S)
    raw = re.sub(r'<script.*?</script>', '', raw, flags=re.S)
    raw = re.sub(r'<(p|div|h[1-6]|li|br|blockquote|section|article)[^>]*>', '\n', raw)
    raw = re.sub(r'</(p|div|h[1-6]|li|blockquote|section|article)>', '\n', raw)
    raw = re.sub(r'<[^>]+>', '', raw)
    text = html.unescape(raw)
    lines = [l.strip() for l in text.split('\n')]
    lines = [l for l in lines if l]
    return lines

z = zipfile.ZipFile(EPUB)

chapters = []
# part0002 ~ part0047 是正文（46 章）
for i in range(2, 48):
    f = f'text/part{i:04d}.html'
    raw = z.read(f).decode('utf-8', errors='ignore')
    lines = strip_html(raw)
    # 跳过封面/目录类文件
    if not lines:
        continue
    # 第一章标题形如 "第一章"，也有 "第一章1" 连排的情况；取第一段作为标题（去掉行号数字）
    title_line = lines[0]
    # 去掉行号（纯数字行在正文前）
    while title_line.isdigit() and len(lines) > 1:
        lines = lines[1:]
        title_line = lines[0]
    # 标题可能是 "第一章" 或 "第一章 1"（章名+页码），清理页码残留
    title = title_line
    m = re.match(r'^(第[一二三四五六七八九十百千]+章)(\d+)?$', title)
    if m:
        title = m.group(1)
    # 正文段落：去掉标题行、可能的行号
    paras = []
    for l in lines[1:]:
        if l.isdigit() and len(l) <= 4:  # 页码行
            continue
        paras.append(l)
    chapters.append({
        'id': f'jsz{i-1}',
        'title': title,
        'paragraphs': paras,
    })
    print(f'{f}: 章「{title}」 {len(paras)} 段 {sum(len(p) for p in paras)} 字')

total_chars = sum(sum(len(p) for p in c['paragraphs']) for c in chapters)
print(f'\n共 {len(chapters)} 章, 总字数 {total_chars}')

# 压缩：转成 JSON 输出
js = 'window.JIU_SHI_ZHU = ' + json.dumps(chapters, ensure_ascii=False) + ';\n'
with open(OUT, 'w', encoding='utf-8') as f:
    f.write(js)
print('已写入', OUT, os.path.getsize(OUT), 'bytes')
