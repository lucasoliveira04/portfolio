import { getTexts } from "../data/text";
import datacenter from "../../public/pdf/PROJETO EM INFRAESTRUTURA COMPUTACIONAL_ DATACENTER.pdf";
import { ExternalLinkIcon } from "lucide-react";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

function AboutMe({ language }) {
    const text = getTexts(language);

    const timelineEvents = [
        { 
            year: 2024, 
            month: `${text.aboutMe.projetoDataCenter.date}`, 
            event: `${text.aboutMe.projetoDataCenter.description}`, 
            link: datacenter,
            isAcademic: true
        },
        { 
            year: 2024, 
            month: `${text.aboutMe.projectGameDevUnity.date}`, 
            event: `${text.aboutMe.projectGameDevUnity.description}`, 
            link: "https://mtgroup.itch.io/nosso-mar-salve-os-patinhos", 
            isAcademic: true 
        },
    ];

    return (
        <div className="relative bg-[#111316] py-8 px-6">
            <div className="mb-8">
                <span className="flex gap-4">
                    <FaUserCircle className="w-6 h-6 text-white" />
                    <h4 className="font-sans text-white font-bold text-2xl">{text.aboutMe.aboutMeText}</h4>
                </span>

                <p className="text-gray-400 mt-1 text-sm">
                    {text.aboutMe.description}
                </p>
            </div>

            <div className="mb-8 text-gray-300 text-sm flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>{text.aboutMe.academicProjectExplanation}</span>
            </div>

            <div className="border-l-2 border-gray-300 pl-6">
                {timelineEvents.map((item, index) => (
                    <div className="flex items-start mb-6 relative" key={index}>
                        <div className={`absolute left-[-8px] w-4 h-4 ${item.isAcademic ? 'bg-green-500' : 'bg-blue-500'} rounded-full`}></div>

                        <div className="ml-8">
                            <strong className="block text-lg font-semibold text-gray-200">{item.year}, {item.month}</strong>
                            <p className="text-gray-400">{item.event}</p>

                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button className="mt-2 px-6 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-600 flex items-center space-x-2 transition duration-300">
                                    <ExternalLinkIcon className="w-5 h-5" />
                                    <span>{text.aboutMe.visitProject}</span>
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutMe;
