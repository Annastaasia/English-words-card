import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import TableMap from "./components/TableMap";
import CardLearn from "./components/CardLearn/CardLearn";
import NoMatch from "./components/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";
import "./style/allstyle.scss";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/game" element={<CardLearn />} />
        <Route exact path="/English-words-card" element={<TableMap />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div >
  );
}


