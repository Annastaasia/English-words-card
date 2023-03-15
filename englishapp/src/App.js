import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import TableMap from "./components/TableMap.jsx";
import Card from "./components/Card.jsx";
import "./style/allstyle.scss";
import NoMatch from "./components/NoMatch/NoMatch";



export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/cards" element={<Card />} />
          <Route exact path="/English-words-card" element={<TableMap />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div >
    </Router>);
}



