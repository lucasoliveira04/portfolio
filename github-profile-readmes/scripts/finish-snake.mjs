import { read, write } from './profile-lib.mjs';
for (const name of ['snake.svg','snake-dark.svg']) {
  const path=`assets/animado/${name}`;
  const source=await read(path);
  if(!source.includes('<svg')||!source.includes('</svg>'))throw Error('SVG da cobra inválido.');
  const reduced='<style id="reduced-motion">@media(prefers-reduced-motion:reduce){*{animation:none!important}}</style>';
  await write(path,source.includes('id="reduced-motion"')?source:source.replace('</svg>',reduced+'</svg>'));
}
console.log('Cobra pronta com suporte a movimento reduzido.');
