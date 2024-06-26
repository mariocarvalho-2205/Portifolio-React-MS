import Card from "../Card/Card";
import "./Services.css";
import Browser from "../../img/browser.svg";
import Resume from "./Resume.pdf"

const Services = () => {
  return (
    <div className="services">
      {/* Left */}
      <div className="awesome">
        <span>My Awesome </span>
        <span>services </span>
        <span>
          Meus serviços são:
          <br />
          Desenvolvimento de Sites e Aplicativos
        </span>

        <a href={Resume} download ><button download={Resume} className="button s-button">Download CV</button></a>
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      {/* Right */}
      <div className="cards">
        <div style={{ left: "40rem" }}>
          <Card image={Browser} heading={"Desenvolvimento Web"} detail={"Utilizando as tecnologias React, Node.js, MongoDB, Express.js, Next.js"} button_text={"Saiba Mais"} />

        </div>
        <div style={{ top: "18rem", left: "10rem" }}>
          <Card image={Browser} heading={"Sistemas de cadastro"} detail={"Utilizando armazenamento na nuvem, utilizando banco de dados como firebase, MongoDb"} button_text={"Saiba Mais"} />

        </div>
        <div style={{ top: "22rem", left: "36rem" }}>
          <Card image={Browser} heading={"Sistemas de cadastro"} detail={"Utilizando armazenamento na nuvem, utilizando banco de dados como firebase, MongoDb"} button_text={"Saiba Mais"} />

        </div>
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}>

        </div>
      </div>
    </div>
  );
};

export default Services;
