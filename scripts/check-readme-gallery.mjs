import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../github-profile-readmes/',import.meta.url));
const config=JSON.parse(await readFile(path.join(root,'profile.config.json'),'utf8'));
const cache=JSON.parse(await readFile(path.join(root,'previews/cache.json'),'utf8'));
const registry=await readFile(new URL('../src/app/pages/readme-gallery/readme-themes.ts',import.meta.url),'utf8');
assert.deepEqual([...registry.matchAll(/id: '([^']+)'/g)].map(m=>m[1]),config.themes,'Theme registry and source config diverged.');
for(const theme of config.themes){
  const source=await readFile(path.join(root,'themes',theme,'README.md'),'utf8');
  const hash=createHash('sha256').update(source).digest('hex');
  assert.equal(cache[theme]?.hash,hash,`Regenerate gallery after changing ${theme}.`);
  assert.equal(await readFile(path.join(root,'downloads',theme+'.md'),'utf8'),source.replaceAll('../../','./'));
  for(const mode of ['light','dark']){
    const file=path.join(root,'previews',`${theme}-${mode}.html`);
    const html=await readFile(file,'utf8');
    assert.doesNotMatch(html,/<script|<iframe|<object|<embed|\son\w+=/i);
    assert.doesNotMatch(html,/src="https?:/i);
    const images=[...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)];
    assert.equal(images.length,theme==='animado'?6:2);
    for(const image of images)await access(path.resolve(path.dirname(file),image[1]));
  }
}
await access(path.join(root,'downloads/lucas-oliveira-readmes.zip'));
console.log(`Galeria verificada: ${config.themes.length} fontes, ${config.themes.length*2} prévias e downloads completos.`);
