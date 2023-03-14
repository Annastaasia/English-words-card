import mainLogo from "../assets/image/logo.png";

function Header() {
  return (
    <header>
      <div className="App__header">
        <img src={mainLogo} alt="logo" className="App__header__logo" />
        <h1 className="App__header__h1">English cards</h1>
        <div className="App__header__buttons">
          <button className="App__header__game"></button>
          <button className="App__header__home"></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
