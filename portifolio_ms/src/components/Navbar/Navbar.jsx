import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Portfolio MS</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portifolio</li>
            <li>Testmonials</li>
          </ul>
        </div>
        <button className="button n-button">Contato</button>
      </div>
    </div>
  );
};

export default Navbar;
