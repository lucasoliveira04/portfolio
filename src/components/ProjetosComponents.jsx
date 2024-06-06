/* eslint-disable react/prop-types */
import "../../public/css/responsive/media.css";
import "../../public/css/projetos/style.css";
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Container
} from "react-bootstrap";

import java from "../../public/img/java (1).png";
import spring from "../../public/img/icons8-spring-boot-96.png";
import python from "../../public/img/python (1).png";

const highlightWords = (text, wordsToHighlight) => {
  let highlightedText = text;
  wordsToHighlight.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<strong>$1</strong>');
  });
  return highlightedText;
};

const Card = ({ title, description, github, languagem, framework, documentacao, type }) => {
  let url = "https://github.com/lucasoliveira04/";

  const wordsToHighlight = ["JWT", "PostgreSQL", "Spring Boot", "JavaMailSender", "MimeMessageHelper", "API", "automatizado", "seguro", "Python", "Render"];
  const highlightedDescription = highlightWords(description, wordsToHighlight);

  return (
    <Container className={`card-container ${type}`}>
      <CardBody className="card-body">
        <CardHeader className="card-header">
          <CardText
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif"
            }}
          >
            {title}
          </CardText>
        </CardHeader>
        <CardText
          style={{
            fontSize: "18px",
            fontFamily: "Roboto, sans-serif"
          }}
          dangerouslySetInnerHTML={{ __html: highlightedDescription }}
        />
        <CardFooter className="card-footer">
          <div>
            <a href={url + github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>Github</a>
            {documentacao && <a href={documentacao} target="_blank" rel="noopener noreferrer">Documentação</a>}
          </div>
          <div>
            <img src={languagem} alt="Linguagem" style={{ marginRight: '5px' }} width="50px" />
            {framework && <img src={framework} alt="Framework" width="50px" />}
          </div>
        </CardFooter>
      </CardBody>
    </Container>
  );
}

export const ProjectComponent = () => {
  const projectsBackEnd = [
    {
      title: "Api de Login",
      description: "Este projeto implementa login com JWT e PostgreSQL, hospedando a API e o banco de dados na Render. Oferece autenticação segura e escalável, simplificando a implementação do login em aplicações",
      languagem: java,
      framework: spring,
      github: "api_login_jwt",
      type: "backend"
    },
    {
      title: "Api de Enviar Email",
      description: "A API de Envio de E-mails desenvolvida com Spring Boot oferece uma solução eficiente para enviar mensagens programaticamente. Utilizando JavaMailSender do Spring e MimeMessageHelper, a API é capaz de enviar e-mails de forma confiável. Com funcionalidades como tratamento de contatos anônimos e personalização das mensagens, é uma escolha sólida para integrar em projetos web que requerem envio de e-mails automatizado e seguro.",
      languagem: java,
      framework: spring,
      github: "api_send_email",
      type: "backend"
    },
    {
      title: "Api de mascara URLs",
      description: "API de máscara de URLs, desenvolvida em Java com Spring Boot. Oferece uma solução simples e eficiente para encurtar URLs longas, permitindo redirecionamentos rápidos e transparentes para suas versões originais.",
      languagem: java,
      framework: spring,
      github: "api-url-masker",
      type: "backend"
    },
    {
      title: "Github Desktop Viewer",
      description: "O Visualizador de Repositórios do GitHub é uma aplicação Python que simplifica a interação com repositórios hospedados no GitHub. Os usuários podem buscar, clonar e abrir repositórios, além de visualizar uma lista de usuários recentes.",
      languagem: python,
      github: "github_repository_viewer",
      type: "backend"
    },
  ];
  const projectsFrontEnd = [
    {
      title: "Api de Login",
      description: "Este projeto implementa login com JWT e PostgreSQL, hospedando a API e o banco de dados na Render. Oferece autenticação segura e escalável, simplificando a implementação do login em aplicações",
      languagem: java,
      framework: spring,
      github: "api_login_jwt",
      type: "backend"
    },
    {
      title: "Github Desktop Viewer",
      description: "O Visualizador de Repositórios do GitHub é uma aplicação Python que simplifica a interação com repositórios hospedados no GitHub. Os usuários podem buscar, clonar e abrir repositórios, além de visualizar uma lista de usuários recentes.",
      languagem: python,
      github: "github_repository_viewer",
      type: "backend"
    },
  ];

  return (
    <div className="container-project">
      <div className="container-back">
        {projectsBackEnd.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            languagem={project.languagem}
            framework={project.framework}
            github={project.github}
            type="backend"
          />
        ))}
      </div>
      <div className="container-front">
        {projectsFrontEnd.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            languagem={project.languagem}
            framework={project.framework}
            github={project.github}
            type="frontend"
          />
        ))}
      </div>
    </div>
  );
};
