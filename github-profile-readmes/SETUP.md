# Usar os dez READMEs

O README da raiz usa o tema Animado / GitHub Pulse. Cada alternativa está em `themes/<tema>/README.md`, com imagens próprias em `assets/<tema>/`. Os textos são editáveis; os trechos entre `LIVE:START` e `LIVE:END` são gerados automaticamente.

## Trocar o tema

Com Node.js 24 instalado, execute na raiz deste repositório:

```sh
node scripts/activate-theme.mjs windows-xp
git add README.md profile.config.json
git commit -m "style: use Windows XP profile"
git push
```

Opções: `retro`, `futurama`, `windows-xp`, `intellij`, `minimalista`, `terminal`, `blueprint`, `jornal`, `rpg`, `animado`. O script corrige os caminhos relativos ao copiar a versão para a raiz. Para editar o texto, altere o arquivo do tema e execute o mesmo comando novamente.

Depois que o workflow estiver na branch padrão, também é possível usar **Actions → Profile README → Run workflow → theme**. Escolha `manter` para apenas atualizar os dados.

## O que é dinâmico

- Os SVGs de arcade, Futurama, IntelliJ, minimalista, terminal e RPG têm movimentos discretos. XP, Blueprint e Jornal priorizam uma composição estática. Os SVGs respeitam `prefers-reduced-motion`.
- As seções expansíveis funcionam com `<details>` nativo do GitHub.
- O workflow consulta a API oficial do GitHub diariamente às **06:17 UTC / 03:17 de São Paulo** e atualiza os dez temas, os cartões e o README ativo.
- A versão `animado` traz texto digitado, órbitas, levitação, faixa de tecnologias, pacotes em movimento, métricas pulsantes, rodapé animado e a cobra de contribuições. A cobra é gerada por [Platane/snk](https://github.com/Platane/snk), com a versão fixada por SHA no workflow; os demais SVGs são desenhados nos scripts deste kit. A geração usa somente o token fornecido pelo GitHub Actions.
- Os dados incluem repositórios públicos próprios, estrelas nesses repositórios, quantidade de linguagens predominantes e os três repositórios com push mais recente.
- São excluídos forks, repositórios privados e outros proprietários. Repositórios arquivados entram nos totais, mas não na lista recente. O próprio repositório de perfil também não entra na lista recente.
- Uma linguagem predominante por repositório não mede proficiência. A data de push não representa um projeto concluído nem atividade de commits por pessoa.
- `data/github.json` registra a consulta. Se a API falhar, o processo termina antes de escrever; o último snapshot continua disponível.

O agendamento e o acionamento manual dependem de o workflow estar na branch padrão. Nesta proposta em PR, os dados são o snapshot já coletado e as verificações rodam nos pushes. O GitHub pode atrasar agendamentos e desativar workflows agendados de repositórios públicos após 60 dias sem atividade. [Referência oficial de eventos e agendamento](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows).

## Atualizar localmente

```sh
node scripts/build-art.mjs
node scripts/update-profile.mjs
node --test scripts/profile.test.mjs
```

A API pública funciona sem token dentro do limite de requisições. O workflow usa o `GITHUB_TOKEN` fornecido pelo GitHub; nenhum PAT adicional é necessário. Para reconstruir os cartões sem rede, use `node scripts/update-profile.mjs --offline`.

Os scripts não têm dependências npm. Os banners são SVG nativo, sem scripts, fontes remotas ou serviços de estatísticas externos. Os nomes e caminhos ficam no mesmo repositório. [Caminhos relativos no GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

## Fontes do conteúdo

Nome, foco em Java/Spring, cidade, formação e portfólio: [perfil público](https://github.com/lucasoliveira04). LinkedIn: endereço presente nas configurações atuais do [portfólio](https://github.com/lucasoliveira04/portfolio).

Descrições e tecnologias foram baseadas nos repositórios públicos: [Share File](https://github.com/lucasoliveira04/api_share_file), [Transaction Kafka](https://github.com/lucasoliveira04/ms-transaction-kafka), [Finance GraphQL](https://github.com/lucasoliveira04/user-finance-graphql), [DSA](https://github.com/lucasoliveira04/dsa), [Garbage Collector](https://github.com/lucasoliveira04/garbage_collector), [DeckIfy](https://github.com/lucasoliveira04/DeckIfy), [Open Tracing](https://github.com/lucasoliveira04/api-open-tracing) e [Process Image](https://github.com/lucasoliveira04/api-process-image). A seleção editorial também considera o contexto técnico disponível das conversas, sem reproduzir conteúdo interno de trabalho.

As composições de Futurama, Windows XP e IntelliJ são homenagens visuais independentes. Marcas e personagens pertencem aos respectivos titulares; os banners vetoriais desta proposta foram desenhados para este perfil.
