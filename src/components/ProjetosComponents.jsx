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
import { useRef } from "react";
import { Element } from "react-scroll";
import java from "../../public/img/java (1).png";
import spring from "../../public/img/icons8-spring-boot-96.png";
import python from "../../public/img/python (1).png";
import unity from "../../public/img/unity.png";
import csharp from "../../public/img/csharp.png";
import { AbouMeComponent } from "./AboutMe";

// Constants
const wordsToHighlight = [
  "JWT",
  "PostgreSQL",
  "Spring Boot",
  "JavaMailSender",
  "MimeMessageHelper",
  "API",
  "automatizado",
  "seguro",
  "Python",
  "Render",
  "urls"
];

// Helper Functions
const highlightWords = (text, wordsToHighlight, color) => {
  let highlightedText = text;
  wordsToHighlight.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    highlightedText = highlightedText.replace(
      regex,
      `<strong style="color:${color}">$1</strong>`
    );
  });
  return highlightedText;
};

// Components
const Card = ({
  title,
  description,
  github,
  playLink,
  languagem,
  framework,
  type
}) => {
  const highlightColor = type === "backend" ? "blue" : "green";
  const highlightedDescription = highlightWords(
    description,
    wordsToHighlight,
    highlightColor
  );

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
            {playLink ? (
              <a
                href={playLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                Jogar
              </a>
            ) : (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                GitHub
              </a>
            )}
          </div>
          <div className="imgs-footer-project">
            <img
              src={languagem}
              alt="Linguagem"
              style={{ marginRight: "5px" }}
              width="50px"
            />
            {framework && <img src={framework} alt="Framework" width="50px" />}
          </div>
        </CardFooter>
      </CardBody>
    </Container>
  );
};

export const ProjectComponent = () => {
  const aboutRef = useRef(null);

  const projectsBackEnd = [
    {
      title: "Api de Login",
      description:
        "Este projeto implementa loginn com JWT e PostgreSQL, hospedando a API e o banco de dados na Render. Oferece autenticação segura e escalável, simplificando a implementação do login em aplicações",
      languagem: java,
      framework: spring,
      github: "https://github.com/lucasoliveira04/api_login_jwt",
      type: "backend",
    },
    {
      title: "Nosso Mar : Salve os Patinhos",
      description:
        "Jogo, desenvolvido com valor comercial, que tem como objetivo conscientizar crianças sobre a importância de preservar o meio ambiente. O jogo foi desenvolvido em Unity e C#, e futuramente será lançado na Play Store.",
      languagem: csharp,
      framework: unity,
      playLink: "https://mtgroup.itch.io/nosso-mar-salve-os-patinhos",
      type: "backend"
    }
  ];

  const projectsFrontEnd = [
    {
      title: "Github Desktop Viewer",
      description:
        "O Visualizador de Repositórios do GitHub é uma aplicação Python que simplifica a interação com repositórios hospedados no GitHub. Os usuários podem buscar, clonar e abrir repositórios, além de visualizar uma lista de usuários recentes.",
      languagem: python,
      github: "https://github.com/lucasoliveira04/github-desktop-viewer",
      type: "frontend"
    },
    {
      title: "Api de mascara URLs",
      description:
        "API de máscara de URLs, desenvolvida em Java com Spring Boot. Oferece uma solução simples e eficiente para encurtar URLs longas, permitindo redirecionamentos rápidos e transparentes para suas versões originais.",
      languagem: java,
      framework: spring,
      github: "https://github.com/lucasoliveira04/api-url-masker",
      type: "frontend"
    }
  ];

  return (
    <div>
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
              playLink={project.playLink}
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
              playLink={project.playLink}
              type="frontend"
            />
          ))}
        </div>
      </div>
      <hr />
      <Element name="sobre" id="sobre">
        <Container ref={aboutRef}>
          <AbouMeComponent id={"sobre"} />
        </Container>
      </Element>
    </div>
  );
};
