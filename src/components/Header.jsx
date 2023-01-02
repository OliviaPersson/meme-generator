import "./Header.css";
import headerSymbol from "../images/troll-face.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo-container">
        <img className="header-symbol" src={headerSymbol} />
        <h3 className="header-text">Meme Generator</h3>
      </div>

      <p>React Course - Project 3</p>
    </div>
  );
};

export default Header;
