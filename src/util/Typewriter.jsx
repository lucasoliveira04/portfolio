import { useState, useEffect } from "react";

export const Typewriter = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!text) return;

        let currentIndex = 0;
        let timeoutId;
        let cancelled = false;

        setDisplayedText("");

        const startTyping = () => {
            if (cancelled || currentIndex >= text.length) return;

            setDisplayedText(text.slice(0, currentIndex + 1));
            currentIndex++;
            timeoutId = setTimeout(startTyping, 100);
        };

        timeoutId = setTimeout(startTyping, 100);

        return () => {
            cancelled = true;
            clearTimeout(timeoutId);
        };
    }, [text]);

    return (
        <h2 className="text-4xl md:text-5xl text-gray-700 mt-6 font-comic">
            {displayedText}
        </h2>
    );
};
