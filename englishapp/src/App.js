import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
//import Header from "./components/Header.jsx";
import TableMap from "./components/TableMap.jsx";
//import CardMap from './components/CardMap.jsx';
import Card from "./components/Card.jsx";
import "./style/allstyle.scss";
import mainLogo from "./assets/image/logo.png";




export default function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="App__header">
            <Link to="/"><img src={mainLogo} alt="logo" className="App__header__logo" /></Link>
            <h1 className="App__header__h1">English cards</h1>
            <div className="App__header__buttons">
              <Link to="/cards"><button className="App__header__game"></button></Link>
              <Link to="/"><button className="App__header__home"></button></Link>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/cards" element={<Card />} />
          <Route path="/" element={<TableMap />} />
        </Routes>
      </div >
    </Router>);
}



