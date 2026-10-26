// 构建脚本：读取小程序数据，注入 H5 模板，生成自包含 index.html
const fs = require('fs');
const path = require('path');

const novel = require(path.join(__dirname, '..', 'ielts-fast-travel-miniprogram', 'data', 'novel.js'));
const vocab = require(path.join(__dirname, '..', 'ielts-fast-travel-miniprogram', 'data', 'vocab.js'));

const template = fs.readFileSync(path.join(__dirname, 'index.template.html'), 'utf8');

function safeJson(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

const html = template
  .replace('/*__NOVEL_DATA__*/', safeJson(novel))
  .replace('/*__VOCAB_DATA__*/', safeJson(vocab));

fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('index.html generated, size:', (html.length / 1024).toFixed(1), 'KB');
