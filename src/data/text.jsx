const highlightedWords = {
    pt: {
        developer: "Desenvolvedor Back-End",
        field: "Ciências da Computação",
        skills: "tecnologias",
        growth: "desafios",
        header: {
            projects: "Projetos",
            aboutMe: "Sobre Mim",
            contactsMe: "Entre em contato",
        },
        feedback: "Deixe seu feedback",
        leaveContact: "Contato (Opcional)",
        sendFeedback: "Enviar",
        projects: [
            {
                id: 1,
                title: "Github Desktop Viewer",
                description: "O Github Desktop Viewer é uma aplicação Python que simplifica a interação com repositórios hospedados no GitHub. Os usuários podem buscar, clonar e abrir repositórios, além de visualizar uma lista de usuários recentes.",
                use: "Usar",
                using: "Usando",
                visit: "Visitar"
            },
            {
                id: 2,
                title: "ChatBot AI",
                description: "Este projeto consiste em um ChatBot inteligente desenvolvido utilizando ReactJS, com estilização em Tailwind. Ele é capaz de interagir com os usuários, oferecendo respostas automatizadas baseadas em inteligência artificial.",
                use: "Usar",
                using: "Usando",
                visit: "Visitar"
            },
            {
                id: 3,
                title: "Nosso Mar Salve os Patinhos 🦆",
                description: "Nosso Mar: Salve os Patinhos é um jogo educativo desenvolvido em Unity para o Colégio Emílio de Rousseau. O jogo, que utiliza C# e PixelArt, tem o objetivo de conscientizar sobre a poluição marinha, inspirando-se no incidente de 1992 quando patinhos de borracha caíram no oceano.",
                use: "Usar",
                using: "Usando",
                visit: "Visitar"
            },
            {
                id: 4,
                title: "Portfolio ",
                description: "Este é o meu portfólio, desenvolvido com ReactJS e Tailwind. Ele apresenta meus projetos e habilidades de forma clara e organizada. O design é moderno, responsivo e otimizado para diferentes dispositivos. Aqui, você pode explorar meu trabalho e conhecer melhor minhas experiências.",
                visit: "Visitar"
            },
        ],
        aboutMe: {
            aboutMeText: "Sobre Mim",
            description: "Sou estudante de Desenvolvimento de Sistemas e desenvolvimento de jogos. Tenho trabalhado em diversos projetos acadêmicos que me proporcionaram aprendizado contínuo, sempre em busca de novos desafios e aprimoramento profissional.",
            projetoDataCenter: {
                date: "Junho",
                description: "O projeto visa a construção de um data center de pequeno porte, com ênfase na segurança, integridade e agilidade no gerenciamento de dados acadêmicos e administrativos da escola. Ele inclui análise de requisitos, projeto de infraestrutura física, aquisição de equipamentos, redes e conectividade, sistemas de energia e resfriamento, além de segurança, monitoramento e backup."
            },
            projectGameDevUnity: {
                date: "Agosto",
                description: "Nosso Mar: Salve os Patinhos é um jogo educativo para conscientizar sobre os impactos da poluição. No jogo, o jogador assume o papel de um protetor dos oceanos e precisa localizar e resgatar 20 patinhos de borracha espalhados pela praia, enfrentando desafios e aprendendo sobre questões ambientais ao longo do caminho."
            },
            academicProjectExplanation: "A bolinha verde indica um projeto acadêmico.",
            visitProject: "Visitar Project"
        },
    },
    en: {
        developer: "Back-End Developer",
        field: "Computer Science",
        skills: "technologies",
        growth: "challenges",
        header: {
            projects: "Projects",
            aboutMe: "About Me",
            contactsMe: "Contact Me",
        },
        feedback: "Leave your feedback",
        leaveContact: "Contact (Optional)",
        sendFeedback: "Send",
        projects: [
            {
                id: 1,
                title: "Github Desktop Viewer",
                description: "The Github Desktop Viewer is a Python application that simplifies interaction with repositories hosted on GitHub. Users can search, clone, and open repositories, as well as view a list of recent users.",
                use: "Use",
                using: "Using",
                visit: "View Site"
            },
            {
                id: 2,
                title: "ChatBot AI",
                description: "This project consists of an intelligent ChatBot developed using ReactJS, with styling in Tailwind. It is capable of interacting with users, providing automated responses based on artificial intelligence.",
                use: "Use",
                using: "Using",
                visit: "View Site"
            },
            {
                id: 3,
                title: "Our Sea: Save the Ducklings 🦆",
                description: "Our Sea: Save the Ducklings is an educational game developed in Unity for Colégio Emílio de Rousseau. The game, built with C# and PixelArt, aims to raise awareness about marine pollution, inspired by the 1992 incident when rubber ducklings fell into the ocean.",
                use: "Use",
                using: "Using",
                visit: "View Site"
            },
            {
                "id": 4,
                "title": "Portfolio",
                "description": "This is my portfolio, built with ReactJS and Tailwind. It showcases my projects and skills in a clear and organized way. The design is modern, responsive, and optimized for different devices. Here, you can explore my work and learn more about my experiences.",
                "visit": "View Site"
            }
            
        ],
        aboutMe: {
            aboutMeText: "About Me",
            description: "I am a student of Systems Development and game development. I have worked on several academic projects that have provided me with continuous learning, always seeking new challenges and professional improvement.",
            projetoDataCenter: {
                date: "June",
                description: "The project aims to build a small-scale data center, focusing on security, integrity, and agility in managing academic and administrative data for the school. It includes requirements analysis, physical infrastructure design, equipment acquisition, network and connectivity, energy and cooling systems, as well as security, monitoring, and backup."
            },
            projectGameDevUnity: {
                date: "August",
                description: "Our Sea: Save the Ducklings is an educational game designed to raise awareness about the impacts of pollution. In the game, the player takes on the role of an ocean protector and must locate and rescue 20 rubber ducklings scattered along the beach, facing challenges and learning about environmental issues along the way."
            },
            academicProjectExplanation: "The green dot indicates an academic project.",
            visitProject: "Visit Project"
        },
    },
};

export const getTexts = (language) => {
    const currentMonth = new Date().getMonth() + 1;
    const startSemester = 5;
    const semester = startSemester + Math.floor((currentMonth - 1) / 6);
    const currentYear = new Date().getFullYear();

    return {
        pt: {
            role: "Desenvolvedor Back-End",
            pronouns: "Ele/Dele",
            age: "20 Anos",
            description: (
                <>
                    Sou um <span className="font-bold">{highlightedWords.pt.developer}</span>. Atualmente, estou no {semester}º semestre da minha formação em <span className="font-bold">{highlightedWords.pt.field}</span>, onde adquiro conhecimentos que complementam minha prática profissional. Estou sempre aberto a aprender novas <span className="font-bold">{highlightedWords.pt.skills}</span> e enfrentar <span className="font-bold">{highlightedWords.pt.growth}</span> que possam me ajudar a crescer como profissional.
                </>
            ),
            alt: "Foto de Lucas Oliveira",
            titlePhoto: "Foto de Lucas Oliveira",
            header: highlightedWords.pt.header,
            projects: highlightedWords.pt.projects,
            feedback: highlightedWords.pt.feedback,
            leaveContact: highlightedWords.pt.leaveContact,
            sendFeedback: highlightedWords.pt.sendFeedback,
            aboutMe: highlightedWords.pt.aboutMe,
            footer: (
                <>
                    © {currentYear} Desenvolvido por 
                    <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold"> Lucas Oliveira</span>
                </>
            )
        },
        en: {
            role: "Back-End Developer",
            pronouns: "He/Him",
            age: "20 Years",
            description: (
                <>
                    I am a <span className="font-bold">{highlightedWords.en.developer}</span>. Currently, I am in the {semester}th semester of my studies in <span className="font-bold">{highlightedWords.en.field}</span>, where I acquire knowledge that complements my professional practice. I am always open to learning new <span className="font-bold">{highlightedWords.en.skills}</span> and facing <span className="font-bold">{highlightedWords.en.growth}</span> that can help me grow as a professional.
                </>
            ),
            alt: "Photo of Lucas Oliveira",
            titlePhoto: "Photo of Lucas Oliveira",
            header: highlightedWords.en.header,
            projects: highlightedWords.en.projects,
            feedback: highlightedWords.en.feedback,
            leaveContact: highlightedWords.en.leaveContact,
            sendFeedback: highlightedWords.en.sendFeedback,
            aboutMe: highlightedWords.en.aboutMe,
            footer: (
                <>
                    © {currentYear} Developed by
                    <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-bold"> Lucas Oliveira</span>
                </>
            )
        },
    }[language];
};
