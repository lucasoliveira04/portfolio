import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import path from 'node:path';
import { summarize, publicRepos, xml, md, config, read, ROOT } from './profile-lib.mjs';

const sample = (extra={}) => ({ name:'api', private:false, fork:false, owner:{login:'lucasoliveira04'}, language:'Java', stargazers_count:2, pushed_at:'2026-09-10T12:00:00Z', ...extra });
test('public snapshot excludes private, forked and other owners; archive excluded from recent only', () => {
  const result = summarize([sample(),sample({name:'private',private:true,stargazers_count:999}),sample({name:'fork',fork:true}),sample({owner:{login:'someone-else'}}),sample({name:'old',archived:true}),sample({name:'unknown',private:undefined})],config.username,'2026-09-12T00:00:00Z');
  assert.equal(result.publicOriginalRepos,2);
  assert.equal(result.stars,4);
  assert.deepEqual(result.recent.map(r=>r.name),['api']);
  assert.equal(JSON.stringify(result).includes('private'),false);
});
test('pagination fetches beyond the first 100 public repositories',async()=>{
  const urls=[];
  const result=await publicRepos(config.username,async url=>{urls.push(url);return {ok:true,json:async()=>urls.length===1?Array.from({length:100},()=>sample()):[sample({name:'last'})]};});
  assert.equal(result.length,101);
  assert.ok(urls[1].endsWith('page=2'));
});
test('an API failure aborts the refresh',async()=>{
  await assert.rejects(publicRepos(config.username,async()=>({ok:false,status:403})),/HTTP 403/);
});
test('repository text is escaped before entering Markdown or SVG',()=>{
  assert.equal(xml('<script>&"'), '&lt;script&gt;&amp;&quot;');
  assert.equal(md('a|b\n[x](y)'), 'a\\|b \\[x\\]\\(y\\)');
});
test('all complete variants have exactly one dynamic section and only existing local targets',async()=>{
  for(const theme of config.themes){
    const file=`themes/${theme}/README.md`;
    const source=await read(file);
    assert.equal((source.match(/<!-- LIVE:START -->/g)||[]).length,1);
    assert.equal((source.match(/<!-- LIVE:END -->/g)||[]).length,1);
    assert.ok(source.includes('UNINOVE'));
    assert.ok(source.includes('api_share_file'));
    assert.ok(source.includes('Consulta em'));
    assert.doesNotMatch(source,/<script|<iframe|style=/i);
    const links=[...source.matchAll(/(?:\]\(|(?:href|src|srcset)=")((?:\.\.\/)+[^)"#]+)(?:[)#"])/g)].map(m=>m[1]);
    for(const link of links) await access(path.resolve(ROOT,path.dirname(file),link));
    const artwork=await read(`assets/${theme}/hero.svg`);
    assert.ok(artwork.includes('prefers-reduced-motion'));
    assert.doesNotMatch(artwork,/<script|foreignObject|https?:\/\/(?!www.w3.org)/i);
  }
});
test('the root profile exactly matches the selected theme with paths rebased',async()=>{
  assert.equal(await read('README.md'),(await read(`themes/${config.activeTheme}/README.md`)).replaceAll('../../','./'));
});
