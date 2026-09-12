import { activate, config, write } from './profile-lib.mjs';
const theme = process.argv[2] || config.activeTheme;
await activate(theme);
await write('profile.config.json', JSON.stringify({ ...config, activeTheme: theme }, null, 2) + '\n');
console.log(`Tema ativo: ${theme}`);
