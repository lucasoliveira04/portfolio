import "../../public/css/aboutme/style.css";
import "../../public/css/responsive/media.css";
import java from "../../public/img/java (1).png"
import python from "../../public/img/python (1).png"
import js from "../../public/img/js.png"
import sql from "../../public/img/servidor-sql.png"
import { useState } from "react";

export const AbouMeComponent = () => {
  const [contacts, setContacts] = useState("");
  const [feedback, setFeedback] = useState("");

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
  
  const calculateSemester = (startYear, startMonth) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // getMonth() retorna o mês de 0 a 11

    const totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
    const semester = Math.ceil(totalMonths / 6); // Cada semestre tem 6 meses

    return semester;
  };

  const birthDate = "2004-06-29";
  const age = calculateAge(birthDate);
  const startYear = 2023; // Ano de início do curso
  const startMonth = 1; // Mês de início do curso (Janeiro)
  const currentSemester = calculateSemester(startYear, startMonth);

  const handleSendResponse = async () => {
    const emailRequest = {
      configurationMail: {
        host: "smtp.gmail.com",
        port: "587",
        username: "camposdlucasoli@gmail.com",
        password: "kwqjsnlelyhchkzp",
        supportMail: "camposdlucasoli@gmail.com",
      },
      emailRequest: {
        message: feedback,
        contacts: contacts,
      },
    };

    try{
      const response = await fetch(
        "https://api-send-email-46gw.onrender.com/api/send/email/send",
        {
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(emailRequest)
        }
      )

      if (response.ok){
        setFeedback("")
        setContacts("")
      }
    } catch (error){
      alert(error)
    }
  }

  return (
    <div className="container-aboutme">
      <div className="card-left-about">
        <div className="sobremim c">
          <div className="title-card">
            <h3 style={{textAlign: 'center', fontWeight: '900'}}>Sobre Mim</h3>
          </div>
          <p style={{fontWeight: '500'}}>
            Olá! Meu nome é Lucas Oliveira e tenho {age} anos. Atualmente estou no <strong>{currentSemester}º semestre</strong> do curso de <strong>Ciências da Computação</strong>, com <strong>previsão de conclusão em dezembro de 2027</strong>. Estou em busca de oportunidades para <strong>estágio</strong> ou uma posição como <strong>Desenvolvedor Júnior Back End</strong>. Sou uma pessoa dedicada e apaixonada por tecnologia, sempre buscando aprender e me desenvolver na área de desenvolvimento de software. 
            <br/><br/>
            Atualmente, estou focando meus estudos em conteúdos relacionados ao desenvolvimento Back End, incluindo <strong>microserviços</strong>, uso de <strong>design patterns</strong>, e outras tecnologias essenciais para a construção de sistemas escaláveis e eficientes.
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
            <img src={sql} alt="" width={"70px"} height={"70px"} className="skill-icon"/>
          </p>
          </div>
          
        </div>

        <div className="feedback-container">
          <h4 className="feedback-title">Deixe seu feedback</h4>
            <textarea
              className="feedback-textarea"
              rows="5"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>

            <input
              type="text"
              className="feedback-input"
              placeholder="Contato ( Opcional )"
              value={contacts}
              onChange={(e) => setContacts(e.target.value)}
            />
            <button className="feedback-button" onClick={handleSendResponse}>Enviar</button>
          </div>
      </div>
    </div>
  );
};
