import HeaderComponent from "../component/header.component.jsx";
import {useNavigate} from "react-router-dom";
import {setNavigate} from "../global/navigate.js";

export function HomePage() {
    const navigate = useNavigate();
    setNavigate(navigate);

    const navItems = [
        { text: "Projetos", path: "/projetos" },
        { text: "Sobre Mim", path: "/sobre" },
        { text: "Contatos", path: "/contatos" }
    ];

    const headerObject = {
        title: "Lucas Oliveira",
        subtitle: "Desenvolvedor Full Stack",
        from: "#ffffff",
        to: "#032d7a",
        textTitleColor: "#050a75",
        textSubtitleColor: "#030d1a",
        nav: navItems
    };

    return (
        <>
            <div>
                <HeaderComponent
                    {...headerObject}
                />
            </div>
        </>
    )
}