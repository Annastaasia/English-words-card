import Table from "./Table/Table.jsx";
//import cards from "../utils/card.js";
import { useContext } from "react";
import { Context } from "./Context.js";

export default function TableMap() {
  const { dictionary } = useContext(Context);
  return (
    <main>
      <div className="container__cards">
        {dictionary.map((card, i) => (
          <Table
            number={i + 1}
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
