import { useState, useRef } from "react";

function CarrouselComponent({ media }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const deltaX = touchStartX.current - touchEndX.current;

        if (deltaX > 50) {
            nextSlide();
        } else if (deltaX < -50) {
            prevSlide();
        }
    };

    return (
        <div
            className="relative w-full max-w-lg mx-auto"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {media.length > 1 && (
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={prevSlide}
                >
                    &#9664;
                </button>
            )}

            <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-lg shadow-lg">
                {media[currentIndex].type === "image" ? (
                    <img src={media[currentIndex].src} alt="Slide" className="w-full h-full object-cover" />
                ) : (
                    <iframe
                        width="100%"
                        height="100%"
                        src={media[currentIndex].src}
                        title="Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>

            {media.length > 1 && (
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                    onClick={nextSlide}
                >
                    &#9654;
                </button>
            )}
        </div>
    );
}

export default CarrouselComponent;
