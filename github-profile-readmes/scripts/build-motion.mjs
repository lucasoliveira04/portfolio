import { svg, text as t, rect as r, write } from './profile-lib.mjs';

let body=r(0,0,1200,460,'#101327',18);
body+='<style>.orbit{transform-origin:951px 233px;animation:orbit 28s linear infinite}.orbit-back{transform-origin:951px 233px;animation:orbit 38s linear infinite reverse}.type-reveal{animation:typing 9s steps(26,end) infinite}.levitate{animation:levitate 5s ease-in-out infinite}.beam{animation:beam 6s linear infinite}@keyframes orbit{to{transform:rotate(360deg)}}@keyframes typing{0%,8%{width:0}40%,85%{width:610px}100%{width:0}}@keyframes levitate{50%{transform:translateY(-13px)}}@keyframes beam{0%{transform:translate(-150px,0);opacity:0}20%,70%{opacity:.8}100%{transform:translate(150px,0);opacity:0}}@media(prefers-reduced-motion:reduce){.type-reveal{width:610px}}</style>';
for(let i=0;i<58;i++)body+=`<circle cx="${(i*137+11)%1200}" cy="${(i*59+16)%460}" r="${i%9===0?2:1}" fill="${i%2?'#6995e6':'#85dbc8'}" opacity=".4"/>`;
body+='<path d="M0 388H1200M0 413H1200M0 441H1200" stroke="#293358"/>';
for(let x=-800;x<2000;x+=180)body+=`<path d="M650 350L${x} 460" stroke="#263050"/>`;
body+='<g class="orbit"><ellipse cx="951" cy="233" rx="181" ry="79" fill="none" stroke="#5571ac"/><circle cx="770" cy="233" r="7" fill="#6ee7d1"/><circle cx="1132" cy="233" r="5" fill="#ff98cb"/></g><g class="orbit-back"><ellipse cx="951" cy="233" rx="143" ry="145" fill="none" stroke="#3c527c"/><circle cx="951" cy="88" r="6" fill="#d5aeff"/></g><circle cx="951" cy="233" r="90" fill="#1a2241" stroke="#6887bb" stroke-width="2" class="pulse"/>';
body+='<g class="levitate">'+t(951,255,65,'#b6ffee','{ }','class="mono" text-anchor="middle" font-weight="700"')+'</g>';
body+=r(47,34,255,32,'#233951',16)+t(65,56,15,'#9fead6','CÓDIGO EM MOVIMENTO','class="mono" letter-spacing="1"');
body+=t(43,155,89,'#f1f2ff','LUCAS','font-weight="900" letter-spacing="-4"')+t(43,240,89,'#f1f2ff','OLIVEIRA','font-weight="900" letter-spacing="-4"');
body+=t(49,287,23,'#a9b8e0','JAVA · SPRING · BACKEND','class="mono" letter-spacing="2"');
body+='<style>.still-copy{display:none}@media(prefers-reduced-motion:reduce){.motion-copy{display:none}.still-copy{display:inline}}</style><g class="motion-copy" clip-path="url(#typing)">'+t(49,352,30,'#78eed0','Da API ao byte. Sempre aprendendo.','class="mono"')+'</g><g class="still-copy">'+t(49,352,30,'#78eed0','Da API ao byte. Sempre aprendendo.','class="mono"')+'</g>';
body+=t(49,423,16,'#8c9ecc','SÃO PAULO / CIÊNCIA DA COMPUTAÇÃO / UNINOVE','class="mono"');
body+='<path d="M802 414H1110" stroke="#70e2d1" opacity=".65" class="beam"/>';
await write('assets/animado/hero.svg',svg('Lucas Oliveira. Java e Spring. Órbitas, texto digitado e código em movimento.',body,460,'<clipPath id="typing"><rect x="47" y="315" width="610" height="48"><animate attributeName="width" values="0;610;610;0" keyTimes="0;0.4;0.85;1" dur="9s" repeatCount="indefinite"/></rect></clipPath>'));

let ticker=r(0,0,1200,96,'#151a31',12)+'<style>.ticker{animation:move 28s linear infinite}@keyframes move{to{transform:translateX(-1200px)}}</style><g class="ticker">';
const skills=['JAVA','SPRING','KAFKA','AWS S3','DOCKER','C / DSA'];
for(let i=0;i<12;i++){const x=i*200;ticker+=t(x+25,55,22,i%2?'#abbcff':'#88ead2',skills[i%6],'class="mono" font-weight="700"')+`<circle cx="${x+179}" cy="48" r="3" fill="#566187"/>`;}
ticker+='</g>';
await write('assets/animado/stack.svg',svg('Faixa animada de tecnologias: Java, Spring, Kafka, AWS S3, Docker e C/DSA.',ticker,96));

let flow=r(0,0,1200,190,'#101327',14)+'<style>.packet{animation:packet 3s ease-in-out infinite}.p2{animation-delay:1s}.p3{animation-delay:2s}@keyframes packet{0%{transform:translateX(0);opacity:0}15%,80%{opacity:1}100%{transform:translateX(114px);opacity:0}}</style>';
flow+=t(36,37,17,'#a7b9e4','IDEIA → CÓDIGO → TESTE → APRENDIZADO','class="mono" letter-spacing="1"');
const values=['IDEIA','CONSTRUIR','INVESTIGAR','APRENDER'];
for(let i=0;i<4;i++){const x=36+i*299;flow+=r(x,78,220,70,'#202945',10,'stroke="#485d8a"')+t(x+110,122,22,'#d9e5ff',values[i],'class="mono" text-anchor="middle"');if(i<3)flow+=`<path d="M${x+220} 114H${x+299}" stroke="#48607f" stroke-width="2"/><circle class="packet p${i+1}" cx="${x+210}" cy="114" r="5" fill="#6ff1d2"/>`;}
await write('assets/animado/flow.svg',svg('Ciclo ilustrado de desenvolvimento com pacotes animados: ideia, construir, investigar e aprender.',flow,190));

let footer=r(0,0,1200,106,'#151a31',12)+'<style>.sweep{animation:sweep 8s linear infinite}@keyframes sweep{from{transform:translateX(-120px)}to{transform:translateX(1200px)}}</style>'+t(600,49,21,'#a4b7ec','COMMIT. APRENDA. REPITA.','class="mono" text-anchor="middle" letter-spacing="5"');
footer+='<path d="M45 78H1155" stroke="#364363" stroke-width="2"/><path d="M0 78H120" stroke="#79ead1" stroke-width="3" class="sweep"/>';
await write('assets/animado/footer.svg',svg('Commit. Aprenda. Repita. Linha animada acompanha a mensagem.',footer,106));
console.log('4 peças de motion design geradas.');
