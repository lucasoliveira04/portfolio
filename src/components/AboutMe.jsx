import "../../public/css/aboutme/style.css";
import "../../public/css/responsive/media.css";
import java from "../../public/img/java (1).png"
import python from "../../public/img/python (1).png"
import js from "../../public/img/js.png"

export const AbouMeComponent = () => {
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }

    return age;
  };

  const birthDate = "2004-06-29";
  const age = calculateAge(birthDate);

  return (
    <div className="container-aboutme">
      <div className="card-left-about">
        <div className="sobremim c">
          <div className="title-card">
            <h3 style={{textAlign: 'center'}}>Sobre Mim</h3>
          </div>
          <p style={{fontWeight: 'bold'}}>
            Olá! Meu nome é Lucas Oliveira e tenho {age} anos. Atualmente estou no 3º semestre do curso de Ciências da Computação, com previsão de conclusão em dezembro de 2027. Estou em busca de oportunidades para estágio ou uma posição como Desenvolvedor Júnior Back End. Sou uma pessoa dedicada e apaixonada por tecnologia, sempre buscando aprender e me desenvolver na área de desenvolvimento de software. 
            <br/><br/>
            Atualmente, estou focando meus estudos em conteúdos relacionados ao desenvolvimento Back End, incluindo microserviços, uso de design patterns, e outras tecnologias essenciais para a construção de sistemas escaláveis e eficientes.
          </p>
        </div>
      </div>
      <div className="card-right-about">    
        <div className="skills c"
          style={{

            height: "10%"
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <p style={{
            display: "flex", gap: "10px"
          }}>
            <img src={java} alt="" width={"70px"} height={"70px"} className="skill-icon"/>
            <img src={python} alt="" width={"70px"} height={"70px"} className="skill-icon"/>
            <img src={js} alt="" width={"70px"} height={"70px"} className="skill-icon"/>
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
