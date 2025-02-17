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
        projects: [
            {
                id: 1,
                title: "Projeto de Imagem",
                description: "Este é um projeto com uma imagem de exemplo.",
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
                description: "Nosso Mar: Salve os Patinhos é um jogo educativo desenvolvido em Unity para conscientizar sobre a poluição marinha, inspirado no incidente real de 1992, quando milhares de patinhos de borracha caíram no oceano. Criado para o Colégio Emílio de Rousseau, o jogo desafia os jogadores a resgatarem 20 patinhos enquanto aprendem sobre preservação ambiental. Utiliza C#, PixelArt para GameArt.",
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
        projects: [
            {
                id: 1,
                title: "Image Project",
                description: "This is a sample project with an image.",
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
                description: "Our Sea: Save the Ducklings is an educational game developed in Unity to raise awareness about marine pollution, inspired by the real-life 1992 incident when thousands of rubber ducklings fell into the ocean. Created for Colégio Emílio de Rousseau, the game challenges players to rescue 20 ducklings while learning about environmental conservation. It uses C#, PixelArt for GameArt.",
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
        },
    }[language];
};
