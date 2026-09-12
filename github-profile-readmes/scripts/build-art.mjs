import { svg, text as t, rect as r, write } from './profile-lib.mjs';

const hero = {};
const label = 'letter-spacing="3" font-weight="700"';
// 01 — Arcade / CRT. Drawn as native SVG so the assets stay editable.
let retro = r(0,0,1200,420,'#100b24',18);
retro += '<circle cx="970" cy="205" r="150" fill="url(#sun)"/>';
for(let y=198;y<354;y+=20) retro += r(810,y,325,9,'#100b24');
retro += '<path d="M0 325H1200V420H0Z" fill="#171035"/>';
for(let x=-600;x<1900;x+=130) retro += `<path d="M600 303L${x} 420" stroke="#56356b" stroke-width="1.5"/>`;
for(const y of [324,340,362,390,419]) retro += `<path d="M0 ${y}H1200" stroke="#583775"/>`;
for(let i=0;i<26;i++) retro += r((i*137+37)%1180,(i*59+26)%270,3,3,i%2?'#62e4ed':'#ffa9df');
retro += t(52,55,18,'#5ee6e7','PLAYER 01 / SÃO PAULO, BR',label);
retro += t(56,150,75,'#652b80','LUCAS OLIVEIRA','font-weight="900" letter-spacing="-3"');
retro += t(52,146,75,'#ffe9fa','LUCAS OLIVEIRA','font-weight="900" letter-spacing="-3"');
retro += t(55,194,23,'#ff93d0','JAVA BACKEND · SPRING · COMPUTER SCIENCE','class="mono"');
retro += t(55,255,28,'#fff2fa','Da API ao byte. Uma fase de cada vez.');
retro += r(54,288,300,43,'#ff75c4',0) + t(75,317,19,'#160c25','PRESS START TO BUILD','class="mono" font-weight="700"');
retro += r(1050,360,13,13,'#6bf0e7',0,'class="cursor"')+t(52,392,16,'#dda5d4','SIDE A: BACKEND     /     SIDE B: ALGORITHMS','class="mono"');
hero.retro=svg('Lucas Oliveira — arcade anos 80 e 90. Java backend, Spring e Ciência da Computação.',retro,420,'<linearGradient id="sun" x2="0" y2="1"><stop stop-color="#ffbd64"/><stop offset="1" stop-color="#fb5cb4"/></linearGradient>');

// 02 — Futurama-inspired delivery terminal with an original illustrated ship.
let future=r(0,0,1200,420,'#0c2926',18);
for(let i=0;i<48;i++) future+=`<circle cx="${(i*173+23)%1200}" cy="${(i*79+17)%420}" r="${i%4===0?2:1}" fill="#91bca3" opacity=".5"/>`;
future+='<circle cx="1010" cy="222" r="155" fill="#194139" stroke="#3c6651"/><ellipse cx="1010" cy="222" rx="215" ry="46" fill="none" stroke="#54765a" stroke-width="2" transform="rotate(-28 1010 222)"/>';
future+=r(42,32,236,32,'#e86243',3)+t(57,54,16,'#fff5d6','PLANET EXPRESS / DEV', 'font-weight="700" letter-spacing="1"');
future+=t(43,140,66,'#f6edcc','GOOD NEWS,','font-weight="900" letter-spacing="-2"')+t(43,210,66,'#b9ee72','EVERYONE!','font-weight="900" letter-spacing="-2"');
future+=t(46,261,27,'#f6edcc','Lucas Oliveira · Engenheiro de entregas HTTP');
future+=t(46,302,21,'#b9d6be','Java / Spring / sistemas em órbita');
future+=r(43,345,598,40,'#173c33',6)+t(60,371,17,'#c6e9a5','ORIGEM: SÃO PAULO   →   DESTINO: PRÓXIMO COMMIT','class="mono"');
future+='<g class="drift"><path d="M811 235L744 217L761 250L738 278L822 263" fill="#ed7649" stroke="#081e1a" stroke-width="5"/><path d="M837 216L836 155L881 204" fill="#c3513f" stroke="#081e1a" stroke-width="5"/><path d="M802 214Q941 151 1108 231Q1094 277 849 281L794 255Z" fill="#9bc783" stroke="#081e1a" stroke-width="6"/><path d="M818 251Q959 264 1091 239" fill="none" stroke="#487b5c" stroke-width="12"/><ellipse cx="1002" cy="214" rx="47" ry="24" fill="#b7e8e4" stroke="#081e1a" stroke-width="5"/><path d="M909 262L862 313L960 273" fill="#b84a3b" stroke="#081e1a" stroke-width="5"/><circle cx="857" cy="235" r="13" fill="#e25843" stroke="#f1e6c4" stroke-width="3"/></g>';
hero.futurama=svg('Lucas Oliveira — central de entregas inspirada em Futurama, com nave verde ilustrada.',future);

// 03 — Windows XP. Vector landscape, Luna-style title bar, taskbar.
let xp=r(0,0,1200,420,'url(#sky)',18);
xp+='<g fill="#fff" opacity=".65"><ellipse cx="110" cy="91" rx="145" ry="33"/><ellipse cx="178" cy="66" rx="69" ry="32"/><ellipse cx="1050" cy="61" rx="156" ry="29"/></g><path d="M0 310Q294 203 579 299T1200 219V420H0Z" fill="#72a93b"/><path d="M0 334Q306 300 540 331T1200 261V420H0Z" fill="#4f941f"/>';
xp+=r(155,38,889,319,'#1748b6',9)+r(160,43,879,31,'url(#luna)',6)+t(175,65,18,'#fff','Propriedades de Lucas Oliveira','font-weight="700"');
xp+=r(160,76,879,276,'#ece9d8');
for(const [x,c,s] of [[949,'#347bea','_'],[978,'#347bea','□'],[1007,'#d95933','×']]) xp+=r(x,47,25,23,c,3,'stroke="#e3eaff"')+t(x+7,65,18,'#fff',s);
xp+=r(181,93,78,28,'#fff',4,'stroke="#b5b3aa"')+t(197,113,16,'#263a55','Geral');
xp+=r(262,96,94,25,'#e5e2d2',4,'stroke="#b5b3aa"')+t(276,114,16,'#263a55','Projetos');
xp+=r(359,96,88,25,'#e5e2d2',4,'stroke="#b5b3aa"')+t(374,114,16,'#263a55','Sistema');
xp+=r(181,120,836,177,'#fff',0,'stroke="#c2c2b9"');
xp+=r(209,153,80,65,'#bddbff',6,'stroke="#2863ac" stroke-width="3"')+r(216,160,66,44,'#337adb',1)+r(241,220,15,13,'#698bb9')+r(226,232,46,6,'#577da9');
xp+=t(320,169,34,'#143876','Lucas Oliveira','font-weight="700"')+t(321,204,22,'#33485f','Desenvolvedor Java Backend')+t(321,244,18,'#465970','Spring Framework · Ciência da Computação / UNINOVE')+t(321,274,18,'#465970','São Paulo, SP · Curiosidade instalada com sucesso.');
xp+=r(805,310,97,29,'#fafafa',3,'stroke="#426497"')+t(841,331,16,'#26364c','OK')+r(914,310,101,29,'#fafafa',3,'stroke="#8b929b"')+t(934,331,16,'#26364c','Aplicar');
xp+=r(0,382,1200,38,'url(#luna)')+'<path d="M0 382H136Q150 400 136 420H0Z" fill="#38943a"/>';
xp+=t(23,409,24,'#fff','iniciar','font-style="italic" font-weight="700"')+r(158,388,277,27,'#1e4eb4',3)+t(172,408,17,'#fff','Lucas Oliveira — README')+t(1065,408,16,'#fff','Java · Spring');
hero['windows-xp']=svg('Área de trabalho inspirada no Windows XP mostrando as propriedades de Lucas Oliveira.',xp,420,'<linearGradient id="sky" x2="0" y2="1"><stop stop-color="#2e7ed1"/><stop offset="1" stop-color="#bbdfff"/></linearGradient><linearGradient id="luna" x2="0" y2="1"><stop stop-color="#5ca0ff"/><stop offset=".2" stop-color="#2771ed"/><stop offset="1" stop-color="#1549bc"/></linearGradient>');

// 04 — IntelliJ-inspired editor. Text remains crisp at any scale.
let ide=r(0,0,1200,420,'#1e1f22',16)+r(0,0,1200,45,'#2b2d30',16)+r(0,30,1200,15,'#2b2d30');
ide+=r(19,10,27,27,'#8d73ee',5)+t(24,29,15,'#fff','IJ','font-weight="700"')+t(64,29,17,'#dfe1e5','lucas-oliveira')+t(229,29,16,'#a8abb5','/ main')+t(962,29,16,'#a9b8ff','Java Backend');
ide+=r(0,45,258,346,'#26282c')+t(22,78,15,'#b2b6bf','Project','font-weight="700"');
const tree=[['⌄ lucas-oliveira','#dfe1e5',110],['  ⌄ src','#c6ccd7',146],['    ⌄ main/java','#c6ccd7',181],['      Lucas.java','#b0bfff',217],['  ⌄ projects','#c6ccd7',261],['    api_share_file','#a9b1bd',294],['    dsa','#a9b1bd',327],['    garbage_collector','#a9b1bd',360]];
ide+=r(9,196,240,32,'#344565',5);
for(const [value,color,y] of tree)ide+=t(17,y,17,color,value,'class="mono"');
ide+=r(259,45,179,42,'#1e1f22')+t(280,72,17,'#dfe1e5','Lucas.java')+r(259,85,179,2,'#7b91ff');
const code=[
  [['#cf8e6d','public class '],['#dfe1e5','Lucas {']],
  [['#80858f','  // Da API ao byte.']],
  [['#cf8e6d','  String '],['#c2a6ef','name'],['#dfe1e5',' = '],['#a5c484','"Lucas Oliveira"'],['#dfe1e5',';']],
  [['#cf8e6d','  String '],['#c2a6ef','focus'],['#dfe1e5',' = '],['#a5c484','"Java / Spring"'],['#dfe1e5',';']],
  [['#cf8e6d','  String[] '],['#c2a6ef','exploring'],['#dfe1e5',' = {']],
  [['#a5c484','    "algoritmos", "memória em C"']],
  [['#dfe1e5','  };']],
  [['#dfe1e5','}']]
];
code.forEach((parts,i)=>{ide+=t(287,123+i*31,18,'#737782',i+1,'class="mono" text-anchor="end"');ide+=`<text x="315" y="${123+i*31}" font-size="21" class="mono" xml:space="preserve">`+parts.map(([color,value])=>`<tspan fill="${color}">${value.replaceAll('&','&amp;').replaceAll('<','&lt;')}</tspan>`).join('')+'</text>';});
ide+=r(769,350,10,22,'#ced5e6',0,'class="cursor"');
ide+=r(0,391,1200,29,'#2b2d30')+t(18,411,15,'#afb4bf','Git: main')+t(861,411,15,'#afb4bf','São Paulo  |  UTF-8  |  Java');
hero.intellij=svg('Editor inspirado no IntelliJ com uma classe Java que apresenta Lucas Oliveira.',ide);

// 05 — Editorial minimalism: warm paper, ink, green orbital punctuation.
let minimal=r(0,0,1200,420,'#f6f5ef',14)+t(49,55,17,'#59705e','LUCAS OLIVEIRA / DESENVOLVEDOR',label);
minimal+='<path d="M50 83H1150" stroke="#cfd6c8"/>';
minimal+=t(45,183,78,'#202d25','Da API','font-weight="700" letter-spacing="-4"')+t(45,267,78,'#202d25','ao byte.','font-weight="700" letter-spacing="-4"');
minimal+=t(49,322,23,'#52604f','Java, Spring e a curiosidade de entender por dentro.');
minimal+=t(49,389,17,'#59705e','SÃO PAULO · CIÊNCIA DA COMPUTAÇÃO / UNINOVE','letter-spacing="1"');
minimal+='<circle cx="965" cy="211" r="111" fill="none" stroke="#cbd5c4"/><circle cx="965" cy="211" r="71" fill="none" stroke="#cbd5c4"/><path d="M872 145L828 211L872 277M1058 145L1102 211L1058 277" fill="none" stroke="#345e40" stroke-width="7" stroke-linecap="round"/><circle cx="965" cy="211" r="14" fill="#3b754a" class="pulse"/>';
hero.minimalista=svg('Lucas Oliveira. Da API ao byte. Composição minimalista em papel claro e verde.',minimal);

// 06 — Unix terminal: green phosphor, commands and generous negative space.
let term=r(0,0,1200,420,'#101911',14)+r(0,0,1200,43,'#243026',14)+r(0,28,1200,15,'#243026');
for(const [x,c] of [[25,'#d9907d'],[48,'#d4bf7b'],[71,'#92b581']])term+=`<circle cx="${x}" cy="22" r="6" fill="${c}"/>`;
term+=t(600,28,17,'#b5c8ae','lucas@saopaulo: ~','class="mono" text-anchor="middle"');
term+=t(47,97,22,'#8dbb7b','❯ whoami','class="mono"')+t(44,170,66,'#d1f4bc','Lucas Oliveira','class="mono" font-weight="700"');
term+=t(48,217,25,'#a7d68f','Java Backend Developer','class="mono"');
term+=t(48,278,21,'#83ac78','❯ cat stack.conf','class="mono"')+t(48,315,22,'#c9debe','Java · Spring · SQL · Kafka · Docker','class="mono"');
term+=t(48,380,21,'#83ac78','❯ próximo passo: entender por dentro','class="mono"')+r(517,363,13,23,'#b0e597',0,'class="cursor"');
term+=t(1148,381,16,'#779c70','UNINOVE / BR','class="mono" text-anchor="end"');
hero.terminal=svg('Terminal Linux de Lucas Oliveira, desenvolvedor Java Backend. Comandos de apresentação e stack.',term);

// 07 — Blueprint: linework, measurements and a conceptual systems diagram.
let blue=r(0,0,1200,420,'#123f70',12);
for(let x=0;x<=1200;x+=24)blue+=`<path d="M${x} 0V420" stroke="#badbff" opacity="${x%120===0?'.14':'.055'}"/>`;
for(let y=0;y<=420;y+=24)blue+=`<path d="M0 ${y}H1200" stroke="#badbff" opacity="${y%120===0?'.14':'.055'}"/>`;
blue+=r(22,22,1156,376,'none',0,'stroke="#86acd0" stroke-width="1"');
blue+=t(48,61,17,'#c8e0f8','ESTUDO DE SISTEMAS / PRANCHA 01','class="mono" letter-spacing="2"')+t(45,144,64,'#f0f6ff','LUCAS OLIVEIRA','font-weight="700" letter-spacing="-2"');
blue+=t(48,184,25,'#d5e7fb','Java Backend · Do contrato da API ao detalhe do byte.');
const nodes=[[48,'API', 'Java / Spring'],[358,'MENSAGENS','Kafka / RabbitMQ'],[668,'DADOS','SQL / S3']];
for(const [x,title,sub] of nodes)blue+=r(x,236,248,76,'#17497a',0,'stroke="#d9eaff" stroke-width="2"')+t(x+124,267,21,'#f2f7fd',title,'class="mono" text-anchor="middle"')+t(x+124,294,16,'#c4dbef',sub,'class="mono" text-anchor="middle"');
blue+='<path d="M296 274H349M336 267L349 274L336 281M606 274H659M646 267L659 274L646 281" fill="none" stroke="#ffe6a1" stroke-width="2"/>';
blue+=t(1060,258,18,'#ffe6a1','OBSERVAR','class="mono" text-anchor="middle"')+t(1060,288,16,'#c4dbef','OTel / Grafana','class="mono" text-anchor="middle"');
blue+='<path d="M948 239V309M943 239H953M943 309H953M48 338H916M48 332V344M916 332V344" stroke="#92bde1"/>';
blue+=t(50,374,16,'#c4dbef','MAPA DE INTERESSES · SÃO PAULO · CIÊNCIA DA COMPUTAÇÃO / UNINOVE','class="mono"');
hero.blueprint=svg('Prancha técnica de Lucas Oliveira. Mapa conceitual de interesses: APIs, mensagens, dados e observabilidade.',blue);

// 08 — Newspaper: serif typography, a masthead and strong editorial rules.
const serif='style="font-family:Georgia,Times New Roman,serif"';
let paper=r(0,0,1200,420,'#f3ecdd',10);
paper+=t(43,43,16,'#575044','CADERNO DE ENGENHARIA', 'letter-spacing="2"')+t(1157,43,16,'#575044','SÃO PAULO, BRASIL','text-anchor="end" letter-spacing="2"');
paper+='<path d="M43 61H1157M43 66H1157" stroke="#3a352e"/>';
paper+=t(600,127,61,'#28241f','O CÓDIGO','text-anchor="middle" font-weight="700" '+serif);
paper+='<path d="M43 147H1157" stroke="#3a352e" stroke-width="3"/>';
paper+=t(45,219,56,'#28241f','Backend com assunto.','font-weight="700" '+serif)+t(47,268,27,'#942f29','Por Lucas Oliveira · Java & Spring',serif);
paper+=t(47,318,22,'#5c5448','APIs, algoritmos e os detalhes que merecem investigação.',serif);
paper+='<path d="M859 178V331" stroke="#ab9d85"/>';
paper+=t(891,211,15,'#942f29','NESTA EDIÇÃO','font-weight="700" letter-spacing="2"')+t(891,250,23,'#28241f','Sistemas em Java',serif)+t(891,284,23,'#28241f','Memória em C',serif)+t(891,318,23,'#28241f','Ciência da Computação',serif);
paper+='<path d="M43 350H1157M43 355H1157" stroke="#3a352e"/>';
paper+=t(46,390,17,'#575044','APURAÇÃO: CURIOSIDADE     /     MÉTODO: CONSTRUIR E ENTENDER','class="mono"')+t(1155,390,17,'#575044','UNINOVE','text-anchor="end"');
hero.jornal=svg('O Código, um jornal editorial de Lucas Oliveira. Backend com assunto: Java, Spring, algoritmos e memória em C.',paper);

// 09 — RPG character sheet: engraved frame, crest and a quest map.
let rpg=r(0,0,1200,420,'#252e28',15)+r(19,19,1162,382,'none',7,'stroke="#a9915c"')+r(26,26,1148,368,'none',4,'stroke="#596047"');
for(const [x,y] of [[19,19],[1181,19],[19,401],[1181,401]])rpg+=`<path d="M${x} ${y-7}L${x+7} ${y}L${x} ${y+7}L${x-7} ${y}Z" fill="#d4b574"/>`;
rpg+=t(50,65,17,'#d5bd82','REGISTRO DA GUILDA / FICHA DE PERSONAGEM','letter-spacing="2"');
rpg+=t(47,146,64,'#f4e6c7','Lucas Oliveira','font-weight="700" '+serif)+t(50,193,28,'#dcc58e','Classe: Artesão de sistemas',serif);
rpg+=t(51,239,22,'#c2c6af','Java & Spring · São Paulo, Brasil');
rpg+='<path d="M52 268H724" stroke="#687257"/>';
rpg+=t(51,308,20,'#e7d6af','MISSÃO PRINCIPAL','font-weight="700" letter-spacing="2"')+t(51,343,24,'#f2e5c6','Construir. Investigar. Subir o próximo degrau.',serif);
rpg+=t(51,380,16,'#b3bba1','CIÊNCIA DA COMPUTAÇÃO / UNINOVE','letter-spacing="2"');
rpg+='<path d="M966 92L1073 133V236Q1064 295 966 335Q868 295 859 236V133Z" fill="#364636" stroke="#d1b477" stroke-width="3"/><path d="M966 106L1059 143V232Q1050 284 966 318Q882 284 873 232V143Z" fill="none" stroke="#778461"/>';
rpg+=t(966,232,78,'#ebce8a','{ }','class="mono" text-anchor="middle" font-weight="700"')+t(966,284,17,'#c9d0b4','JAVA / C','class="mono" text-anchor="middle"');
rpg+='<circle cx="966" cy="119" r="4" fill="#f4dc9c" class="pulse"/>';
hero.rpg=svg('Ficha de personagem de Lucas Oliveira: artesão de sistemas, Java e Spring. Brasão com chaves de código.',rpg);

for(const [theme,content] of Object.entries(hero))await write(`assets/${theme}/hero.svg`,content);
console.log(`${Object.keys(hero).length} banners SVG autorais gerados.`);
await import('./build-motion.mjs');
