import "../../public/css/responsive/media.css";
import "../../public/css/projetos/style.css";

import { CardBody, CardFooter, CardHeader, CardText, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = ({ title, description, languagem, framework, github }) => {
    const urlDefault = "https://github.com/lucasoliveira04/";

    return (
        <Container id="container">
            <CardBody className="card-body">
                <CardHeader className="card-header">
                    <CardText>{title}</CardText>
                </CardHeader>
                <CardText>{description}</CardText>
                <CardFooter className="card-footer">
                    <Link to={urlDefault + github}>Github</Link>
                    <div>
                        <img src={languagem} alt="Linguagem" />
                        <img src={framework} alt="Framework" />
                    </div>
                </CardFooter>
            </CardBody>
        </Container>
    );
}

export const ProjectComponent = () => {
    const projects = [
        {
            title: "Projeto 1",
            description: "Descrição do projeto 1",
            languagem: "https://via.placeholder.com/24/0000FF/FFFFFF?text=JS",
            framework: "https://via.placeholder.com/24/0000FF/FFFFFF?text=React",
            github: "projeto1"
        },
        {
            title: "Projeto 2",
            description: "Descrição do projeto 2",
            languagem: "https://via.placeholder.com/24/0000FF/FFFFFF?text=PY",
            framework: "https://via.placeholder.com/24/0000FF/FFFFFF?text=Django",
            github: "projeto2"
        },
        {
            title: "Projeto 3",
            description: "Descrição do projeto 3",
            languagem: "https://via.placeholder.com/24/0000FF/FFFFFF?text=HTML",
            framework: "https://via.placeholder.com/24/0000FF/FFFFFF?text=CSS",
            github: "projeto3"
        },
        {
            title: "Projeto 3",
            description: "Descrição do projeto 3",
            languagem: "https://via.placeholder.com/24/0000FF/FFFFFF?text=HTML",
            framework: "https://via.placeholder.com/24/0000FF/FFFFFF?text=CSS",
            github: "projeto3"
        }
    ];

    return (
        <Container id="container">
            <div className="container-front">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        languagem={project.languagem}
                        framework={project.framework}
                        github={project.github}
                    />
                ))}
            </div>
            <div className="container-back">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        languagem={project.languagem}
                        framework={project.framework}
                        github={project.github}
                    />
                ))}
            </div>
        </Container>
    );
};
