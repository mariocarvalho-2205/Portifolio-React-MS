import Card from "../Card/Card";
import "./Services.css";
import Browser from "../../img/browser.svg";

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
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
      </div>
      {/* Right */}
      <div className="cards">
      <div style={{left: "24rem"}}>
        <Card image={Browser} heading={"Desenvolvimento Web"} detail={"Utilizando as tecnologias React, Node.js, MongoDB, Express.js, Next.js"} button_text={"Saiba Mais"} />

      </div>
      </div>
    </div>
  );
};

export default Services;
