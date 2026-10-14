import { mkdir, copyFile, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist');
for (const file of ['index.html', 'style.css', 'app.mjs', 'engine.mjs', 'storage.mjs']) await copyFile(file, `dist/${file}`);
console.log('Static site built in dist/');
