import Table from "./Table/Table.jsx";
//import cards from "../utils/card.js";
import { Context } from "./Context.js";
import { useContext, useState, useEffect } from "react";

export default function TableMap() {
  const { dictionary, deleteWords } = useContext(Context);
  const [wordCollection, setwordCollection] = useState(dictionary);

  useEffect(() => {
    setwordCollection(dictionary);
  }, [dictionary]);

  const onDelete = (id) => {
    deleteWords(id);
  };

  return (
    <main>
      <div className="container__cards">
        {wordCollection.map((card, i) => (
          <Table
            number={i + 1}
            key={card.id}
            english={card.english}
            transcription={card.transcription}
            russian={card.russian}
            onDelete={onDelete}
            //number={card.number}
            //word={card.word}
            //translate={card.translate}
          />
        ))}
      </div>
    </main>
  );
}
