import { Component } from "react";
import { handleNavigate } from "../global/navigate.js";
import { LanguageSelect } from "./language-select.component.jsx";
import {Home, User, Briefcase, Mail, Settings} from "lucide-react";

export default class HeaderComponent extends Component {
    render() {
        return (
            <header
                style={{
                    background: `linear-gradient(90deg, ${this.props.from || "#0A66C2"}, ${this.props.to || "#004182"})`,
                }}
                className="w-full flex flex-wrap md:flex-nowrap items-center justify-between px-6 py-3 shadow-lg sticky top-0 z-30"
            >
                <section
                    onClick={() => handleNavigate("/")}
                    className="flex items-center gap-2 cursor-pointer select-none"
                >
                    <div>
                        <h1
                            style={{ color: this.props.textTitleColor || "#fff" }}
                            className="font-oswald text-[26px] md:text-[32px] font-bold leading-tight"
                        >
                            {this.props.title || "Lucas.dev"}
                        </h1>
                        <p
                            style={{ color: this.props.textSubtitleColor || "#E0E7FF" }}
                            className="text-sm md:text-base font-light tracking-wide"
                        >
                            {this.props.subtitle || "Full Stack Developer"}
                        </p>
                    </div>
                </section>

                {/* Navegação */}
                <nav className="hidden md:flex gap-8 items-center">
                    {this.props.nav?.map((nav, i) => (
                        <button
                            key={i}
                            onClick={() => handleNavigate(nav.path)}
                            className="flex items-center gap-2 text-white hover:text-blue-200 transition-all
                            duration-300 font-oswald text-[16px] font-semibold cursor-pointer"
                        >
                            {nav.icon === "home" && <Home size={18} />}
                            {nav.icon === "user" && <User size={18} />}
                            {nav.icon === "work" && <Briefcase size={18} />}
                            {nav.icon === "mail" && <Mail size={18} />}
                            {nav.icon === "settings" && <Settings size={18} />}
                            {nav.text}
                        </button>
                    ))}
                </nav>

                {/* Seletor de idioma */}
                <div className="flex items-center gap-3">
                    <LanguageSelect />
                </div>

                {/* Navegação responsiva */}
                <div className="flex md:hidden mt-3 w-full justify-around text-white">
                    {this.props.nav?.map((nav, i) => (
                        <button
                            key={i}
                            onClick={() => handleNavigate(nav.path)}
                            className="flex flex-col items-center text-sm hover:text-blue-200 transition"
                        >
                            {nav.icon === "home" && <Home size={20} />}
                            {nav.icon === "user" && <User size={20} />}
                            {nav.icon === "work" && <Briefcase size={20} />}
                            {nav.text}
                        </button>
                    ))}
                </div>
            </header>
        );
    }
}
