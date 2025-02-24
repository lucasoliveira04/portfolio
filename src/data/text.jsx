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
        ],
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
        ],
    },
};

export const getTexts = (language) => {
    const currentMonth = new Date().getMonth() + 1;
    const startSemester = 5;
    const semester = startSemester + Math.floor((currentMonth - 1) / 6);
    const currentYear = new Date().getFullYear()

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
            footer: `© ${currentYear} Desenvolvido por Lucas`
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
            footer: `© ${currentYear} Developed by Lucas`
            
        },
    }[language];
};
