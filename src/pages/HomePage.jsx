import { Container, Nav } from "react-bootstrap";
import "../../public/css/style.css";
import "../../public/css/responsive/media.css";

export const HomePage = () => {
  return (
    <Container id="home">
      <Nav className="nav">
        <h2
          className="fw-bold"
          style={{ cursor: "pointer", fontSize: "45px", color: "white" }}
        >
          Lucas Oliveira
        </h2>
        <div className="linksNav">
          <Nav.Link href="#home" className="HLink">
            Home
          </Nav.Link>
          <Nav.Link href="#sobre" className="SLink">
            Sobre Mim
          </Nav.Link>
          <Nav.Link href="#projetos" className="PLink">
            Projetos
          </Nav.Link>
        </div>
      </Nav>
      <header>
        <div className="midLinks">
          <h1 style={{ color: "white" }}>Lucas Oliveira</h1>
          <div className="subTitle">
            <p style={{ color: "white" }}>Desenvolvedor Back End</p>
            <div className="redesSociais">
              <a href="https://www.instagram.com/lucasoliveira.04_/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                  alt="Instagram"
                  height="30px"
                  width="80px"
                />
              </a>
              <a href="https://www.linkedin.com/in/lucas-oliveira-08334a264/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
                  alt="Linkedin"
                  height="30px"
                  width="80px"
                />
              </a>
              <a href="https://www.github.com/lucasoliveira04" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                  alt="Github"
                  height="30px"
                  width="80px"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="arrow-down"></div>
    </Container>
  );
};
