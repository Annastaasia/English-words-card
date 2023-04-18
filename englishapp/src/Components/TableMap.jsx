import Table from "./Table/Table.jsx";
import { Context } from "./Context.js";
import { useContext, useState, useEffect } from "react";

export default function TableMap() {
  const { dictionary, deleteWords } = useContext(Context);
  const [list, setList] = useState(dictionary);

  useEffect(() => {
    setList(dictionary);
  }, [dictionary]);

  const onDelete = (id) => {
    deleteWords(id);
  };

  return (
    <main>
      <div className="container__cards">
        {list.map((card, i) => (
          <Table
            number={i + 1}
            key={card.id}
            english={card.english}
            transcription={card.transcription}
            russian={card.russian}
            onDelete={onDelete}
          />
        ))}
      </div>
    </main>
  );
}
