import { publicRepos, summarize, palettes, svg, text, rect, md, dateBR, config, read, write, activate } from './profile-lib.mjs';

// Fetch all pages before writing. A failed request leaves the previous snapshot intact.
const data = process.argv.includes('--offline')
  ? JSON.parse(await read('data/github.json'))
  : summarize(await publicRepos(config.username), config.username);

const titles = {retro:'HIGH SCORES / GITHUB',futurama:'TELEMETRIA DA MISSÃO','windows-xp':'Propriedades de GitHub',intellij:'Git · Repository insights',minimalista:'O trabalho, em números.',terminal:'$ github --public --summary',blueprint:'QUADRO DE DADOS / REVISÃO PÚBLICA',jornal:'OS NÚMEROS DESTA EDIÇÃO',rpg:'REGISTRO PÚBLICO DA JORNADA',animado:'GITHUB PULSE / DADOS REAIS'};
for (const theme of config.themes) {
  const p = palettes[theme];
  const columns = [[48,data.publicOriginalRepos,'repositórios próprios'],[390,data.stars,'estrelas nesses repos'],[785,data.languages.length,'linguagens principais¹']];
  let body = rect(0,0,1200,206,p.bg,16) + text(38,38,20,p.accent,titles[theme],'font-weight="700"');
  body += text(1162,38,17,p.muted,`Consulta: ${dateBR(data.updatedAt)}`, 'text-anchor="end"');
  for (const [x,value,label] of columns) body += text(x,116,49,p.fg,value,`font-weight="700" ${theme==='animado'?'class="pulse"':''}`) + text(x,148,20,p.muted,label);
  body += text(48,186,15,p.muted,'¹ Linguagens predominantes nos repositórios públicos; forks excluídos.');
  await write(`assets/${theme}/stats.svg`,svg('Dados públicos do GitHub de Lucas Oliveira',body,206));

  let document = await read(`themes/${theme}/README.md`);
  const stats = `![${data.publicOriginalRepos} repositórios públicos próprios, ${data.stars} estrelas, ${data.languages.length} linguagens predominantes. Consulta em ${dateBR(data.updatedAt)}.](../../assets/${theme}/stats.svg)\n\n| Repositório com push recente | Linguagem | Último push |\n| :--- | :--- | :--- |\n` + data.recent.map(r => `| [${md(r.name)}](${r.url}) | ${md(r.language)} | ${dateBR(r.pushedAt)} |`).join('\n') + `\n\n<sub>Consulta em ${dateBR(data.updatedAt)}. Dados públicos; forks excluídos. Push recente não implica conclusão do projeto.</sub>`;
  if (!/<!-- LIVE:START -->[\s\S]*?<!-- LIVE:END -->/.test(document)) throw new Error(`Marcadores ausentes em ${theme}`);
  document = document.replace(/<!-- LIVE:START -->[\s\S]*?<!-- LIVE:END -->/, `<!-- LIVE:START -->\n${stats}\n<!-- LIVE:END -->`);
  await write(`themes/${theme}/README.md`,document);
}
await write('data/github.json',JSON.stringify(data,null,2)+'\n');
await activate();
console.log(`Atualizados ${config.themes.length} temas e README principal: ${data.publicOriginalRepos} repositórios próprios públicos.`);
