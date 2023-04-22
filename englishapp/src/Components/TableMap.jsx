import Table from "./Table/Table.jsx";
import { Context } from "./Context.js";
import { useContext } from "react";
import AddWord from "./AddWord.jsx";

export default function TableMap() {
  const { dictionary } = useContext(Context);

  return (
    <main>
      <AddWord />
      {
        <div className="container__cards">
          {dictionary.map((card, i) => (
            <Table
              number={i + 1}
              key={card.id}
              id={card.id}
              english={card.english}
              transcription={card.transcription}
              russian={card.russian}
              tags={card.tags}
            />
          ))}
        </div>
      }
    </main>
  );
}
