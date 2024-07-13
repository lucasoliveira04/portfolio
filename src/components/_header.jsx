import { useEffect, useState } from "react"
import brasil from "../../public/img/brasil.png"
import eua from "../../public/img/eua.png"
import messages from "../../public/json/messages.json"

export const HeaderComponent = () => {
    const [currentFlag, setCurrentFlag] = useState(brasil)

    useEffect(() => {
        const language = currentFlag === brasil ? 'ptbr' : 'en';
        console.log(messages[language].about_me);
        console.log(messages[language].projects);
        console.log(messages[language].home);
    }, [currentFlag])

    const toggleFlag = () => {
        setCurrentFlag(prevFlag => (prevFlag === brasil ? eua : brasil))
    }

    return(
        <header>
            <p style={{textAlign: 'end', marginRight: '10px'}}>
                <img
                    src={currentFlag}
                    alt="flag"
                    onClick={toggleFlag}
                    style={{cursor: 'pointer'}}
                    width={"50px"}
                />
            </p>
        </header>
    )
}