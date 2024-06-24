import "./Intro.css";
import Github from "../../img/github_svg.svg";
import Linkedin from "../../img/linkedin.svg";
import Instagram from "../../img/instagram.svg";
import Vector1 from "../../img/Vector1.svg";
import Vector2 from "../../img/Vector2.svg";
import Boy from "../../img/boy3d.svg";
import FloatingDiv from "../../components/FloatingDiv/FloatingDiv";
import Arroba from "../../img/arroba.svg";
import Crow from "../../img/crow.svg";



const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Olá, Eu sou</span>

          <span> Mário Carvalho</span>
          <span>
            Desenvolvedor Fullstack com um alto nivél de expericencia em
            desenvolvimento web produzindo um trabalho de Qualidade
          </span>
        </div>
        <button className="button i-button">Contate Me</button>
        <div className="i-icons">
          <img src={Github} alt="Github" />
          <img src={Linkedin} alt="Linkedin" />
          <img src={Instagram} alt="Instagram" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="Instagram" />
        <div style={{top: "-4%", left: "68%"}} >
          <FloatingDiv image={Arroba} tex1={'Desenvolvedor'} tex2={'Web'}/>
        </div>
        <div style={{top: "18rem", left: "0"}} >
          <FloatingDiv image={Crow} tex1={'Qualidade'} tex2={'em 1 lugar'}/>
        </div>
        {/* Blur divs */}
        <div className="blur" style={{background: "rgb(238, 210, 255)"}}></div>
        <div className="blur" style={{background: "#c1f5ff", top: "17rem", width: "21rem", height: "11rem", left: "-9rem"}}></div>
      </div>
    </div>
  );
};

export default Intro;
