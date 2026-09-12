# README Lab

O site tem uma galeria em `/readmes`. A escolha também pode ser compartilhada por URL, como `/readmes?theme=blueprint`.

A página permite trocar entre dez temas, alternar o fundo da prévia, ler e copiar o Markdown e baixar o kit completo. As prévias são renderizadas pela API Markdown do GitHub e exibidas em iframes restritos, sem execução de scripts. Elas aproximam a apresentação do GitHub; a interface e a tipografia do GitHub podem variar.

## Onde editar

- `github-profile-readmes/themes/<tema>/README.md`: conteúdo de cada versão.
- `github-profile-readmes/scripts/build-art.mjs`: desenho dos dez banners SVG.
- `github-profile-readmes/profile.config.json`: tema ativo do README incluído no kit.
- `src/app/pages/readme-gallery/`: página Angular e catálogo dos temas.

O README principal do portfólio documenta a aplicação. O README de perfil fica dentro do kit. Para usar o perfil, copie o conteúdo do ZIP para o repositório especial `lucasoliveira04/lucasoliveira04` e escolha o tema seguindo `github-profile-readmes/SETUP.md`.

## Regenerar

Com Node.js 24, Python 3 e GitHub CLI autenticado:

```sh
node github-profile-readmes/scripts/build-art.mjs
node github-profile-readmes/scripts/update-profile.mjs
node scripts/build-readme-gallery.mjs
python scripts/package-readmes.py
node scripts/check-readme-gallery.mjs
npm run build
```

Para usar o snapshot existente sem consultar os números novamente, passe `--offline` ao script `update-profile.mjs`. A renderização Markdown só consulta o GH quando o conteúdo de um tema muda. O ZIP é reproduzível e inclui os READMEs, assets, fontes, dados e workflow do perfil.

O workflow raiz `README Lab` valida a aplicação, os dez READMEs e as prévias. Depois de chegar à branch padrão do portfólio, atualiza os dados e regenera as prévias e o ZIP diariamente às 06:37 UTC. Publicar o site atualizado depende de levar as mudanças à branch usada pelo deploy, atualmente `angular`. O workflow dentro do kit só é ativado quando colocado na raiz do repositório de perfil.

```sh
node --test github-profile-readmes/scripts/profile.test.mjs
node scripts/check-readme-gallery.mjs
npm test -- --watch=false
```
