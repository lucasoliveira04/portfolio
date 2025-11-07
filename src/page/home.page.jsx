import HeaderComponent from "../component/header.component.jsx";
import {useNavigate} from "react-router-dom";
import {setNavigate} from "../global/navigate.js";

export function HomePage() {
    const navigate = useNavigate();
    setNavigate(navigate);

    const headerObject = {
        title: "Lucas Oliveira",
        subtitle: "Desenvolvedor Full Stack"
    }

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