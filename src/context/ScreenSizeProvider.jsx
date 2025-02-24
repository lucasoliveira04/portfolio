import { createContext, useState, useEffect, useContext } from "react";

const ScreenSizeContext = createContext();

export const ScreenSizeProvider = ({ children }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <ScreenSizeContext.Provider value={{ screenWidth }}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

export const useScreenSize = () => {
    return useContext(ScreenSizeContext);
};
