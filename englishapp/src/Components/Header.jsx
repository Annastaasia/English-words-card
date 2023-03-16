import { Link } from "react-router-dom";
import mainLogo from "../assets/image/logo.png";

function Header() {
  return (
    <header>
      <div className="App__header">
        <Link to="/English-words-card">
          <img src={mainLogo} alt="logo" className="App__header__logo" />
        </Link>
        <h1 className="App__header__h1">English cards</h1>
        <div className="App__header__buttons">
          <Link to="/cards">
            <button className="App__header__game"></button>
          </Link>
          <Link to="/English-words-card">
            <button className="App__header__home"></button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
