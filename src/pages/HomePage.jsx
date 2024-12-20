import { Container, Nav } from "react-bootstrap";
import "../../public/css/style.css";
import "../../public/css/responsive/media.css";
import { useEffect, useState, useRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { ProjectComponent } from "../components/ProjetosComponents";
import { Helmet } from "react-helmet";

export const HomePage = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [showArrowClicked, setShowArrowClicked] = useState(false);
  const [counter, setCounter] = useState(0);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const homeSection = homeRef.current;
      const projectsSection = projectsRef.current;
      const homeHeight = homeSection ? homeSection.clientHeight : 0;
      const projectsTop = projectsSection ? projectsSection.offsetTop : 0;
      const currentScroll = window.scrollY;

      if (currentScroll < homeHeight * 0.02) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }

      if (currentScroll < homeHeight * 0.02) {
        setShowArrowClicked(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowArrowClicked(true);
  };

  const handleArrowClick = () => {
    setShowArrowClicked(false);
    scrollToProjects();
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className="container-geral">
        <Helmet>
          <title>Lucas Oliveira</title>
          <link
            rel="icon"
            href="../../public/img/development_desktop_device_screen_technology_computer_programming_coding_code_icon_212634.ico"
            type="image/x-icon"
          />
        </Helmet>
        <Container id="home" ref={homeRef}>
          <Nav className="nav">
            <ScrollLink
              to="home"
              smooth={true}
              className="fw-bold"
              style={{ cursor: "pointer", fontSize: "45px", color: "white" }}
            >
              Lucas Oliveira
            </ScrollLink>
            <div className="linksNav">
              <Nav.Link
                as={ScrollLink}
                to="home"
                smooth={true}
                className="HLink"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="sobre"
                smooth={true}
                className="SLink"
              >
                Sobre Mim
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="projects"
                smooth={true}
                className="PLink"
              >
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
                  <a
                    href="https://www.instagram.com/lucasoliveira.04_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                      alt="Instagram"
                      height="30px"
                      width="80px"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lucas-oliveira-08334a264/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"
                      alt="Linkedin"
                      height="30px"
                      width="80px"
                    />
                  </a>
                  <a
                    href="https://www.github.com/lucasoliveira04"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
          {showArrow && (
            <div
              className={`arrow-down ${
                !showArrow || showArrowClicked ? "hidden" : ""
              }`}
              id="arrow"
              onClick={handleArrowClick}
            ></div>
          )}
        </Container>

        <Element name="projects" id="projects">
          <Container ref={projectsRef} id="containerProjetos">
            <div className="containerProjetos">
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "34px",
                  fontFamily: '"Concert One", sans-serif',
                  fontWeight: "900",
                  color: "white",
                  textShadow: `
                  0 0 5px rgba(255, 255, 0, 0.8), /* Sombra central mais forte */
                  0 0 10px rgba(255, 255, 0, 0.6), /* Sombra média */
                  0 0 20px rgba(255, 255, 0, 0.4), /* Sombra mais distante */
                  0 0 40px rgba(255, 255, 0, 0.2) /* Sombra distante mais fraca */
              `,
                  letterSpacing: "10px"
                }}
                className="projetosH2"
              >
                PROJETOS
              </h2>
            </div>

            <ProjectComponent />
          </Container>
        </Element>
      </div>
    </div>
  );
};
