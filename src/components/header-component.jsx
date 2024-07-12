import "../../public/css/header-style.css"

export const HeaderComponent = () => {
    return(
        <header>
            <h2>Lucas Oliveira</h2>
            <div className="group-itens-container">
                <p>About Me</p>
                <p>Projects</p>
                <p>Skills</p>
            </div>
        </header>
    )
}