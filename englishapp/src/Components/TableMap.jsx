import Table from "./Table/Table.jsx";
//import cards from "../utils/card.js";
import { useContext } from "react";
import { Context } from "../context/Context.js";

export default function TableMap() {
  const { dictionary, isLouding } = useContext(Context);
  return (
    <main>
      <div className="container__cards">
        {dictionary.map((card, i) => (
          <Table
            //num={i + 1}
            key={card.id}
            english={card.english}
            transcription={card.transcription}
            russian={card.russian}
            //number={card.number}
            //word={card.word}
            //translate={card.translate}
          />
        ))}
      </div>
    </main>
  );
}
