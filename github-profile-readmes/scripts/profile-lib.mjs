import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const read = file => readFile(path.join(ROOT, file), 'utf8');
export async function write(file, content) {
  const target = path.join(ROOT, file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content, 'utf8');
}
export const config = JSON.parse(await read('profile.config.json'));
export const xml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
export const md = value => String(value).replace(/[\\`*_{}\[\]()<>|!#]/g, '\\$&').replace(/[\r\n]+/g, ' ');
export const dateBR = date => new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeZone: 'America/Sao_Paulo' }).format(new Date(date));

export async function publicRepos(username, request = fetch) {
  const repos = [];
  for (let page = 1; ; page++) {
    const response = await request(`https://api.github.com/users/${encodeURIComponent(username)}/repos?type=owner&per_page=100&page=${page}`, {
      headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'profile-readme', ...(process.env.GH_TOKEN ? { Authorization: `Bearer ${process.env.GH_TOKEN}` } : {}) },
      signal: AbortSignal.timeout(20000)
    });
    if (!response.ok) throw new Error(`GitHub API: HTTP ${response.status}; os dados anteriores foram preservados.`);
    const batch = await response.json();
    if (!Array.isArray(batch)) throw new Error('Resposta inválida do GitHub.');
    repos.push(...batch);
    if (batch.length < 100) return repos;
  }
}

export function summarize(repos, username, now = new Date().toISOString()) {
  const own = repos.filter(r => r.private === false && !r.fork && r.owner?.login?.toLowerCase() === username.toLowerCase());
  const languages = {};
  for (const repo of own) if (repo.language) languages[repo.language] = (languages[repo.language] || 0) + 1;
  return {
    updatedAt: now,
    publicOriginalRepos: own.length,
    stars: own.reduce((sum, r) => sum + (r.stargazers_count || 0), 0),
    languages: Object.entries(languages).sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0])),
    recent: own.filter(r => !r.archived && r.name !== username && r.pushed_at).sort((a,b) => b.pushed_at.localeCompare(a.pushed_at) || a.name.localeCompare(b.name)).slice(0, 3).map(r => ({
      name: r.name, url: `https://github.com/${encodeURIComponent(username)}/${encodeURIComponent(r.name)}`,
      language: r.language || 'Documentação', pushedAt: r.pushed_at
    }))
  };
}

export const palettes = {
  retro: {bg:'#100b24',panel:'#211238',fg:'#fff2fa',muted:'#d2afdc',accent:'#ff71c8',line:'#553363'},
  futurama: {bg:'#0c2926',panel:'#143d34',fg:'#f5f0d2',muted:'#aed8bd',accent:'#b9ee72',line:'#37604a'},
  'windows-xp': {bg:'#ece9d8',panel:'#ffffff',fg:'#17335d',muted:'#425775',accent:'#175bd4',line:'#c3c8bb'},
  intellij: {bg:'#1e1f22',panel:'#2b2d30',fg:'#dfe1e5',muted:'#a7aab4',accent:'#a9b8ff',line:'#43454a'},
  minimalista: {bg:'#f6f5ef',panel:'#eceee5',fg:'#202d25',muted:'#586357',accent:'#3c7047',line:'#d5dbce'},
  terminal: {bg:'#101911',panel:'#18251a',fg:'#c9edbb',muted:'#98b793',accent:'#93db76',line:'#344933'},
  blueprint: {bg:'#123f70',panel:'#174c82',fg:'#f0f6ff',muted:'#bdd4ee',accent:'#fff0ae',line:'#5680aa'},
  jornal: {bg:'#f3ecdd',panel:'#e8dfcc',fg:'#25231f',muted:'#645d51',accent:'#942f29',line:'#b0a695'},
  rpg: {bg:'#252e28',panel:'#354336',fg:'#f5ebd1',muted:'#c5c5a7',accent:'#e9c67e',line:'#6d7556'},
  animado: {bg:'#101327',panel:'#1c2140',fg:'#eff2ff',muted:'#aab7e1',accent:'#6ee7d1',line:'#424b78'}
};

export function svg(title, body, height=420, defs='') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="${height}" viewBox="0 0 1200 ${height}" role="img" aria-labelledby="title"><title id="title">${xml(title)}</title><defs>${defs}</defs><style>text{font-family:Arial,Helvetica,sans-serif}.mono{font-family:Consolas,'Liberation Mono',monospace}.drift{animation:drift 7s ease-in-out infinite}.pulse{animation:pulse 4s ease-in-out infinite}.cursor{animation:pulse 2s ease-in-out infinite}@keyframes drift{50%{transform:translateY(-8px)}}@keyframes pulse{50%{opacity:.35}}@media(prefers-reduced-motion:reduce){*{animation:none!important}}</style>${body}</svg>\n`;
}
export const text = (x,y,size,fill,value,more='') => `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" ${more}>${xml(value)}</text>`;
export const rect = (x,y,w,h,fill,r=0,more='') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${more}/>`;

export async function activate(theme = config.activeTheme) {
  if (!config.themes.includes(theme)) throw new Error(`Tema inválido: ${theme}`);
  const source = await read(`themes/${theme}/README.md`);
  // All repository-relative paths in the templates start at their grandparent.
  await write('README.md', source.replaceAll('../../', './'));
}
