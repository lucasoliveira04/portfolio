<div align="center">

# 🚀 Lucas Oliveira — Portfolio (ReactJS)

**Back-End Developer** focado em Java, Spring Boot e arquiteturas escaláveis.

[![Portfólio](https://img.shields.io/badge/🌐_Portfólio-react.lucasoliveira04.com-blue?style=flat-square)](https://react.lucasoliveira04.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucas--oliveira--campos-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/lucas-oliveira-campos/)
[![GitHub](https://img.shields.io/badge/GitHub-lucasoliveira04-181717?style=flat-square&logo=github)](https://github.com/lucasoliveira04)
[![Gmail](https://img.shields.io/badge/Email-lucasolisocialmedia@gmail.com-D14836?style=flat-square&logo=gmail)](mailto:lucasolisocialmedia@gmail.com)

![GitHub stars](https://img.shields.io/github/stars/lucasoliveira04/portfolio?style=flat-square&color=yellow)
![GitHub forks](https://img.shields.io/github/forks/lucasoliveira04/portfolio?style=flat-square&color=blue)
![GitHub license](https://img.shields.io/github/license/lucasoliveira04/portfolio?style=flat-square&color=green)

</div>

---

## 📌 Sobre o projeto

Este repositório contém o código-fonte do meu portfólio pessoal — e é **100% aberto para a comunidade**.

É **100% aberta para a comunidade** e foi pensada para ser facilmente reutilizável. Todo o conteúdo pessoal está centralizado em arquivos de constantes e de tradução — quem fizer um fork só precisa editar esses arquivos para ter o portfólio com os seus dados. Só peço que dê uma ⭐ se te ajudou!

> 💡 Este portfólio está disponível em **3 versões**, cada uma desenvolvida com uma tecnologia diferente:

| Versão       | Tecnologia              | URL                                                                | Branch      |
| ------------ | ----------------------- | ------------------------------------------------------------------ | ----------- |
| ✅ **Esta**  | ReactJS                 | [react.lucasoliveira04.com](https://react.lucasoliveira04.com)     | `react`     |
| 🔷 Angular   | Angular 19              | [angular.lucasoliveira04.com](https://angular.lucasoliveira04.com) | `angular`   |
| 🍃 Thymeleaf | Spring Boot + Thymeleaf | Em breve                                                           | `thymeleaf` |

---

## ✨ Funcionalidades

- 🌍 **Internacionalização** — suporte a PT-BR, EN e ES via `i18next`
- 📱 **Responsivo** — adaptado para mobile, tablet e desktop
- ⚡ **Scroll suave** — navegação entre seções com offset do header fixo
- 📬 **Formulário de contato** — integração com serviço de e-mail
- 🔀 **Seletor de versão** — alterna entre as versões React, Angular e Thymeleaf
- ⚙️ **100% configurável** — todo o conteúdo centralizado em constants e arquivos i18n

---

## 🛠️ Tecnologias utilizadas

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss)
![i18next](https://img.shields.io/badge/i18next-Internacionalização-26A69A?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite)

---

## ⚙️ Arquivos de configuração

Todo o conteúdo pessoal está centralizado — **você não precisa mexer nos componentes**. Basta editar os arquivos abaixo:

### Constantes (`src/constants/`)

| Arquivo       | O que configura                                                                      |
| ------------- | ------------------------------------------------------------------------------------ |
| `social.js`   | Links sociais (GitHub, LinkedIn, Twitter, Instagram, Email) e currículos por idioma  |
| `profile.js`  | Nome e foto de perfil                                                                |
| `about.js`    | Foto do about, data de nascimento, início da faculdade, linguagens e highlight words |
| `nav.js`      | Itens de navegação e chaves de tradução                                              |
| `versions.js` | Versões do portfólio e URLs                                                          |
| `projects.js` | Config do ScrollReveal, limite de cards visíveis e mapa de meses                     |
| `footer.js`   | URL da API de email e links sociais do footer                                        |

### Traduções (`src/locales/`)

| Arquivo               | Idioma                                            |
| --------------------- | ------------------------------------------------- |
| `pt/translation.json` | Português (BR) — textos, projetos, about, contato |
| `en/translation.json` | Inglês (US)                                       |

> Todo o conteúdo textual da interface está nos arquivos de tradução — nenhum texto fica hardcoded nos componentes.

---

## 🍴 Usando como template

**1. Faz o fork**

Clica em **Fork** no canto superior direito e seleciona a branch `react`.

**2. Clona o teu fork**

```bash
git clone -b react https://github.com/SEU_USUARIO/portfolio.git
cd portfolio
```

**3. Instala as dependências**

```bash
npm install
```

**4. Personaliza o conteúdo**

Edita apenas os arquivos de constantes e traduções — não precisa tocar nos componentes:

```
src/
├── locales/
│   ├── pt/translation.json   # Todos os textos em PT-BR
│   ├── en/translation.json   # Todos os textos em EN
└── constants/
    ├── social.js       # Suas redes sociais e currículos
    ├── profile.js      # Seu nome e foto
    ├── about.js        # Seus dados pessoais e linguagens
    ├── nav.js          # Navegação
    ├── versions.js     # Versões do portfólio
    ├── projects.js     # Configurações de projetos
    └── footer.js       # API de email e links do footer
```

**5. Roda localmente**

```bash
npm run dev
```

Acesse em `http://localhost:5173`

**6. Faz o deploy**

Recomendo a [Vercel](https://vercel.com) — conecta o repositório, seleciona a branch `react` e o deploy é automático a cada push.

---

## 🌿 Branches do repositório

| Branch      | Descrição                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------- |
| `react`     | Versão ReactJS — deploy em [react.lucasoliveira04.com](https://react.lucasoliveira04.com)     |
| `angular`   | Versão Angular — deploy em [angular.lucasoliveira04.com](https://angular.lucasoliveira04.com) |
| `thymeleaf` | Versão Spring Boot + Thymeleaf — em breve                                                     |

---

## 👥 Contributors

<a href="https://github.com/lucasoliveira04/portfolio/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=lucasoliveira04/portfolio" />
</a>

---

## 📄 Licença

Distribuído sob a licença **MIT**. Você pode usar, copiar, modificar e distribuir esse projeto livremente — inclusive para fins comerciais — desde que mantenha os créditos.

Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<div align="center">
  Feito com 💙 por <a href="https://github.com/lucasoliveira04">Lucas Oliveira</a>
  <br/>
  <sub>Se esse projeto te ajudou, deixa uma ⭐ — faz diferença!</sub>
</div>
