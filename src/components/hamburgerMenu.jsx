import { useState } from "react";

export function HamburgerMenu({ navOptions }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="relative mobile:block desktop:hidden">
            <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className="p-2 flex flex-col justify-center items-center gap-1 focus:outline-none"
            >
        <span
            className={`block w-6 h-0.5 bg-green-700 transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
        ></span>

                <span
                    className={`block w-6 h-0.5 bg-green-700 transition-opacity duration-300 ease-in-out ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>

                <span
                    className={`block w-6 h-0.5 bg-green-700 transition-transform duration-300 ease-in-out ${
                        isOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                ></span>
            </button>

            <ul
                className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 overflow-hidden
          transition-all duration-300 ease-in-out
          ${
                    isOpen
                        ? "max-h-96 opacity-100 scale-y-100 pointer-events-auto"
                        : "max-h-0 opacity-0 scale-y-90 pointer-events-none"
                }
        `}
                style={{ transformOrigin: "top" }}
            >
                {navOptions.map((option) => (
                    <li
                        key={option.key}
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer text-green-700 font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
}
