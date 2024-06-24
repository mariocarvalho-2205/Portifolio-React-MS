import "./Card.css";

const Card = ({ image, heading, detail, button_text }) => {
  return (
    <div className="card">
        <img src={image} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">{button_text}</button>
    </div>
  );
};

export default Card;
