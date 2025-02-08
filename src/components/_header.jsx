import "../../public/css/header.css";

export const HeaderComponent = () => {

    return (
        <div className={`container-header`}>
            <div>
                <h2 id={"#container-header"}>Lucas Oliveira Campos</h2>
            </div>

            <div>
                <nav>
                    <ul>
                        <li>Projetos</li>
                        <li>Sobre Mim</li>
                        <li>Contatos</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
