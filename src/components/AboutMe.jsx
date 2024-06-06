import "../../public/css/aboutme/style.css";
import "../../public/css/responsive/media.css";

export const AbouMeComponent = () => {
  return (
    <div className="container-aboutme">
      <div className="card-left-about">
        <div className="sobremim c">
          <div className="title-card ">
            <h3>Sobre Mim</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            numquam delectus nesciunt illum quae, nobis beatae consectetur
            inventore, rem repellendus quas nihil distinctio quos dicta
            adipisci. Similique modi nobis consequatur.
          </p>
        </div>
        <div className="objetivo c">
          <div className="title-card ">
            <h3>Card Objetivo</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            numquam delectus nesciunt illum quae, nobis beatae consectetur
            inventore, rem repellendus quas nihil distinctio quos dicta
            adipisci. Similique modi nobis consequatur.
          </p>
        </div>
      </div>
      <div className="card-right-about">
        <div className="projetos c">
          <div className="title-card ">
            <h3>Card Projetos</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            numquam delectus nesciunt illum quae, nobis beatae consectetur
            inventore, rem repellendus quas nihil distinctio quos dicta
            adipisci. Similique modi nobis consequatur.
          </p>
        </div>
        <div className="skills c">
          <div className="title-card">
            <h3>Card skills</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            minima possimus soluta minus! Dolorem rerum nam ad autem dolor
            assumenda exercitationem, temporibus placeat, praesentium qui quia
            magni, nemo ullam iure!
          </p>
        </div>
      </div>
    </div>
  );
};
