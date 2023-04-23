import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Apiwords } from "./Components/Context";
import Header from "./Components/Header/Header";
import TableMap from "./Components/TableMap";
import CardLearn from "./Components/CardLearn/CardLearn";
import NoMatch from "./Components/NoMatch/NoMatch";
import "./style/allstyle.scss";


export default function App() {
  return (
    <Apiwords>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/game" element={<CardLearn />} />
          <Route exact path="/English-words-card" element={<TableMap />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div >
    </Apiwords>
  );
}


