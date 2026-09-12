export const README_THEMES = [
  { id: 'retro', name: 'Anos 80 / 90', label: 'Arcade & nostalgia', description: 'Neon, horizonte digital e uma fase nova a cada projeto.', color: '#ff85cd', dark: true },
  { id: 'futurama', name: 'Futurama', label: 'Entrega interplanetária', description: 'Uma central de missões para entregar boas APIs pelo universo.', color: '#b9ee72', dark: true },
  { id: 'windows-xp', name: 'Windows XP', label: 'Memória afetiva', description: 'Meus documentos, propriedades do sistema e a clássica área de trabalho.', color: '#6ea4ff', dark: false },
  { id: 'intellij', name: 'IntelliJ', label: 'Dentro do editor', description: 'Uma classe Java apresenta quem está por trás dos projetos.', color: '#a9b8ff', dark: true },
  { id: 'minimalista', name: 'Minimalista', label: 'Só o essencial', description: 'Papel claro, um toque de verde e espaço para as ideias.', color: '#88b080', dark: false },
  { id: 'terminal', name: 'Terminal Linux', label: 'Linha de comando', description: 'Fósforo verde, comandos Unix e curiosidade sem interface gráfica.', color: '#93db76', dark: true },
  { id: 'blueprint', name: 'Blueprint', label: 'Desenho de sistemas', description: 'Uma prancha técnica liga APIs, mensagens, dados e observabilidade.', color: '#78b8f2', dark: true },
  { id: 'jornal', name: 'Jornal editorial', label: 'Caderno de engenharia', description: 'Manchetes, colunas e projetos com uma boa história para contar.', color: '#d5af81', dark: false },
  { id: 'rpg', name: 'RPG', label: 'A próxima missão', description: 'Um brasão de código, ferramentas de ofício e um mapa para explorar.', color: '#e9c67e', dark: true },
  { id: 'animado', name: 'GitHub Pulse', label: 'Animações + cobra', description: 'Órbitas, texto digitado, stack em movimento e uma cobra que percorre suas contribuições.', color: '#6ee7d1', dark: true },
] as const;

export function resolveReadmeTheme(id: string | null) {
  return README_THEMES.find(theme => theme.id === id) ?? README_THEMES[9];
}

export function markdownForProfile(source: string) {
  return source.replaceAll('../../', './');
}
