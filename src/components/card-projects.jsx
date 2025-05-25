import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";

export function CardProjects({ title, description, repoUrl, github, visitUrl, downloadPdf, pdfUrl, visit, langs, images = [] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!images.length) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-[500px] border border-gray-200">
            {images.length > 0 && (
                <img
                    src={images[currentImageIndex]}
                    alt={`Imagem ${currentImageIndex + 1} do projeto ${title}`}
                    className="w-full h-56 object-cover rounded-lg mb-4 transition-all duration-500"
                />
            )}

            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{description}</p>

            <div className="flex flex-wrap gap-4 mb-4">
                {repoUrl && (
                    <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-700 hover:text-green-900 text-sm font-medium transition"
                    >
                        <FaGithub className="text-lg" />
                        {github}
                    </a>
                )}
                {visitUrl && (
                    <a
                        href={visitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-700 hover:text-blue-900 text-sm font-medium transition"
                    >
                        <FaExternalLinkAlt className="text-sm" />
                        {visit}
                    </a>
                )}
                {pdfUrl && (
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-red-700 hover:text-red-900 text-sm font-medium transition"
                    >
                        <MdPictureAsPdf className="text-lg" />
                        {downloadPdf}
                    </a>
                )}
            </div>

            {langs && (
                <div className="flex gap-5 flex-wrap items-center justify-center text-sm text-gray-500">
                    {langs.map((lang, idx) =>
                        typeof lang === "string" ? (
                            <span key={idx}>{lang}</span>
                        ) : (
                            <span key={idx} className="flex items-center gap-1">
                                <img src={lang.icon} alt={lang.name} className="w-5 h-5" />
                                {lang.name}
                            </span>
                        )
                    )}
                </div>
            )}
        </div>
    );
}
