import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { getTexts } from "../data/text";

function FooterComponent({ language }) {
    const text = getTexts(language);

    return (
        <footer className="bg-[#262a2f] text-white font-bold p-3">
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://wa.me/11950735140" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                    <FaWhatsapp size={28} />
                </a>
                <a href="https://www.linkedin.com/in/lucas-oliveira-campos" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110">
                    <FaLinkedin size={28} />
                </a>
                <a href="mailto:camposdlucasoli@gmail.com" className="transition-transform transform hover:scale-110">
                    <FaEnvelope size={28} />
                </a>
            </div>

            <div className="text-sm text-center">
                {text.footer}
            </div>
        </footer>
    );
}

export default FooterComponent;
