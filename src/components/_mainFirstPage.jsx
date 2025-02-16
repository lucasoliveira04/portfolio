import { FaGithub, FaLinkedin, FaEnvelope, FaSearch, FaArrowDown } from "react-icons/fa";
import eu from "../../public/img/i.jpg";

function MainFirstPage({ language, scrollToProjects }) {
    const currentMonth = new Date().getMonth() + 1;
    const startSemester = 5;
    const semester = startSemester + Math.floor((currentMonth - 1) / 6);

    // Palavras destacadas
    const highlightedWords = {
        pt: {
            developer: "Desenvolvedor Back-End",
            field: "Ciências da Computação",
            skills: "tecnologias",
            growth: "desafios",
        },
        en: {
            developer: "Back-End Developer",
            field: "Computer Science",
            skills: "technologies",
            growth: "challenges",
        },
    };

    const texts = {
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
        },
    };

    return (
        <div>
            <div className="h-[95vh] bg-[#111316] flex justify-center text-white pt-[70px]">
                <div className="w-[600px] bg-[#111316] p-8 rounded-lg cursor-default">
                    <div className="flex items-center gap-6">
                        <div className="w-48 h-48 rounded-full bg-gray-500 flex items-center justify-center">
                            <span>
                                <img
                                    src={eu}
                                    alt={texts[language].alt}
                                    title={texts[language].titlePhoto}
                                    className="object-cover w-48 h-48 rounded-full"
                                />
                            </span>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Lucas Oliveira</h1>
                            <div className="line-animation"></div>
                            <p className="text-lg text-gray-400">{texts[language].role}</p>
                            <p className="text-gray-500">{texts[language].pronouns}, {texts[language].age}</p>
                        </div>
                    </div>

                    <p className="mt-4 text-gray-300 leading-relaxed">{texts[language].description}</p>

                    <div className="mt-6 flex gap-4 justify-center">
                        <a href="mailto:camposdlucasoli@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="text-gray-400 hover:text-white text-2xl transition" />
                        </a>
                        <a href="https://github.com/lucasoliveira04" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-gray-400 hover:text-white text-2xl transition" />
                        </a>
                        <a href="https://linkedin.com/in/lucas-oliveira-campos" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-gray-400 hover:text-white text-2xl transition" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="h-[5vh] bg-[#111316] flex justify-center text-white cursor-pointer" onClick={scrollToProjects}>
                <FaArrowDown className="animate-bounce text-3xl" />
            </div>
        </div>
    );
}

export default MainFirstPage;
