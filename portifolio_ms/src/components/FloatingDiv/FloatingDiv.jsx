import "./FloatingDiv.css";

const FloatingDiv = ({image, tex1, tex2}) => {
  return (
    <div className='floatingdiv'>
        <img src={image} alt="" />
        <span>
            {tex1}
            <br />
            {tex2}
        </span>
    </div>
  )
}

export default FloatingDiv