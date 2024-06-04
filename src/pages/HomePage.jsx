import { Container, Nav } from "react-bootstrap";
import "../../public/css/style.css";
import "../../public/css/responsive/media.css";
import { useEffect, useState, useRef } from "react";
import { Link as ScrollLink, Element } from "react-scroll";

export const HomePage = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [showArrowClicked, setShowArrowClicked] = useState(false); 
  const projectsRef = useRef(null); 
  const homeRef = useRef(null); 

  useEffect(() => {
    document.title = "Lucas Oliveira";

    const handleScroll = () => {
      const homeSection = homeRef.current;
      const projectsSection = projectsRef.current;
      const homeHeight = homeSection ? homeSection.clientHeight : 0;
      const projectsTop = projectsSection ? projectsSection.offsetTop : 0;
      const currentScroll = window.scrollY;

      console.log('Current Scroll:', currentScroll);
      console.log('Home Height:', homeHeight);
      console.log('Projects Top:', projectsTop);

      if (currentScroll < homeHeight * 0.02) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }

      if (currentScroll < homeHeight * 0.02) {
        setShowArrowClicked(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <div className="container-geral">
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
            <Nav.Link as={ScrollLink} to="home" smooth={true} className="HLink">
              Home
            </Nav.Link>
            <Nav.Link as={ScrollLink} to="sobre" smooth={true} className="SLink">
              Sobre Mim
            </Nav.Link>
            <Nav.Link as={ScrollLink} to="projects" smooth={true} className="PLink">
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
          <div className={`arrow-down ${(!showArrow || showArrowClicked) ? 'hidden' : ''}`} id="arrow" onClick={handleArrowClick}></div>
        )}
      </Container>

      <Element name="projects" id="projects">
        <Container ref={projectsRef}>
          Projetos
        </Container>
      </Element>
    </div>
  );
};
