import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import TableMap from "./components/TableMap";
import Card from "./components/Card/Card";
import NoMatch from "./components/NoMatch/NoMatch";
import "./style/allstyle.scss";




export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/cards" element={<Card />} />
        <Route exact path="/English-words-card" element={<TableMap />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div >
  );
}



