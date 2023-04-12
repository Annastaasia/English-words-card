import React, { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import TableMap from "./components/TableMap";
import CardLearn from "./components/CardLearn/CardLearn";
import NoMatch from "./components/NoMatch/NoMatch";
import { translation, TranslationContext } from "./components/TranslationContext";
import Selection from "./components/Selection";
import "./style/allstyle.scss";


export default function App() {
  const [words, setWords] = useState("english");
  return (
    <TranslationContext.Provider value={translation[words]}>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/game" element={<CardLearn />} />
          <Route exact path="/English-words-card" element={<TableMap />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Selection onWordSelect={setWords} />
      </div >
    </TranslationContext.Provider>
  );
}


