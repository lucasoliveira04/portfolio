import {FaChevronDown} from "react-icons/fa";

export function ScrollArrow(){
    const handleClick = () => {
        window.scrollBy({top: 100, behavior: "smooth"});
    }

    return (
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <button
                onClick={handleClick}
                className="animate-bounce text-green-600 hover:text-green-400 text-3xl transition"
                aria-label="Scroll down"
                title="Descer"
            >
                <FaChevronDown />
            </button>
        </div>
    )
}