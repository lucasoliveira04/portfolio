import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root=fileURLToPath(new URL('../github-profile-readmes/',import.meta.url));
const config=JSON.parse(await readFile(path.join(root,'profile.config.json'),'utf8'));
const previewDir=path.join(root,'previews');
await mkdir(previewDir,{recursive:true});
await mkdir(path.join(root,'downloads'),{recursive:true});
let cache={};
try { cache=JSON.parse(await readFile(path.join(previewDir,'cache.json'),'utf8')); } catch(error) { if(error.code!=='ENOENT')throw error; }
for(const theme of config.themes){
  const markdown=await readFile(path.join(root,'themes',theme,'README.md'),'utf8');
  const hash=createHash('sha256').update(markdown).digest('hex');
  if(cache[theme]?.hash!==hash){
    const body=execFileSync('gh',['api','markdown','--input','-'],{input:JSON.stringify({text:markdown,mode:'gfm',context:'lucasoliveira04/portfolio'}),encoding:'utf8'});
    cache[theme]={hash,body};
  }
  let content=cache[theme].body.replaceAll('../../assets/','../assets/');
  content=content.replace(/href="\.\.\/\.\.\/themes\/([a-z-]+)\/README.md"/g,'href="/readmes?theme=$1" target="_top"').replaceAll('href="../../GALLERY.md"','href="/readmes" target="_top"');
  content=content.replace(/<a\b([^>]*)>/g,(_,attributes)=>`<a${attributes}${attributes.includes('target=')?'':' target="_blank"'} rel="noopener noreferrer">`);
  for(const mode of ['light','dark']){
    const dark=mode==='dark';
    const style=`:root{color-scheme:${mode};--bg:${dark?'#0d1117':'#ffffff'};--ink:${dark?'#e6edf3':'#1f2328'};--muted:${dark?'#a4aebc':'#656d76'};--line:${dark?'#30363d':'#d0d7de'};--panel:${dark?'#161b22':'#f6f8fa'};--link:${dark?'#79b8ff':'#0969da'}}*{box-sizing:border-box}body{background:var(--bg);color:var(--ink);margin:0;font:16px/1.65 -apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif}article{padding:32px;max-width:920px;margin:auto}p{margin:0 0 16px}h3{font-size:21px;margin:28px 0 16px;font-weight:650}a{color:var(--link);text-decoration:none}a:hover{text-decoration:underline}a:focus-visible,summary:focus-visible{outline:3px solid var(--link);outline-offset:4px}img{max-width:100%;height:auto}table{border-collapse:collapse;margin:0 0 20px;display:block;overflow-x:auto;font-size:14px}th,td{border:1px solid var(--line);padding:8px 12px}th{text-align:left}tr:nth-child(even){background:var(--panel)}pre{padding:16px;overflow:auto;background:var(--panel);border-radius:6px;font-size:13px;line-height:1.6}code{font-family:Consolas,monospace;font-size:85%;background:var(--panel);padding:2px 4px;border-radius:4px}pre code{padding:0}blockquote{margin:0 0 16px;padding:0 1em;border-left:4px solid var(--line);color:var(--muted)}details{margin:18px 0}summary{cursor:pointer}hr{border:0;border-top:1px solid var(--line);margin:28px 0}sub{font-size:12px;color:var(--muted)}.pl-k{color:${dark?'#ffab70':'#a64113'}}.pl-s{color:${dark?'#9ed2a5':'#245a37'}}.pl-c{color:var(--muted)}@media(max-width:600px){article{padding:18px}body{font-size:15px}h3{font-size:19px}table{font-size:13px}}`;
    await writeFile(path.join(previewDir,`${theme}-${mode}.html`),`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'"><title>${theme} · Lucas Oliveira</title><style>${style}</style></head><body><article>${content}</article></body></html>\n`);
  }
  await writeFile(path.join(root,'downloads',`${theme}.md`),markdown.replaceAll('../../','./'));
}
await writeFile(path.join(previewDir,'cache.json'),JSON.stringify(cache,null,2)+'\n');
console.log(`${config.themes.length} temas renderizados em fundo claro e escuro.`);
