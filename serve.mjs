import http from 'node:http';
import { readFile } from 'node:fs/promises';
const port = Number(process.env.PORT || 3000);
const files = new Set(['index.html', 'style.css', 'app.mjs', 'engine.mjs', 'storage.mjs']);
const mime = { html: 'text/html', css: 'text/css', mjs: 'text/javascript' };
http.createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  const file = path === '/' ? 'index.html' : path.slice(1);
  if (!files.has(file)) { res.writeHead(404); return res.end('Not found'); }
  try { const body = await readFile(new URL('../' + file, import.meta.url)); res.writeHead(200, { 'Content-Type': mime[file.split('.').pop()] + '; charset=utf-8' }); res.end(body); }
  catch { res.writeHead(500); res.end('Unable to read file'); }
}).listen(port, '127.0.0.1', () => console.log(`Closet Muse: http://localhost:${port}`));
