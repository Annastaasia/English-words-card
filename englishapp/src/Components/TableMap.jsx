import Table from "./Table/Table.jsx";
import { Context } from "./Context.js";
import { useContext, useState, useEffect } from "react";
import AddWord from "./AddWord.jsx";

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
      <AddWord />
      {
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
      }
    </main>
  );
}

// {
//   <table className="container__cards">
//     <thead>
//       <tr className="row-main">
//         <th className="cell-main">Number</th>
//         <th className="cell-main">English</th>
//         <th className="cell-main">Transcription</th>
//         <th className="cell-main">Russian</th>
//         <th className="cell-main-action">Edit</th>
//         <th className="cell-main-action">Delete</th>
//       </tr>
//     </thead>
//     <tbody>
//       {list.map((card, i) => (
//         <Table
//           number={i + 1}
//           key={card.id}
//           english={card.english}
//           transcription={card.transcription}
//           russian={card.russian}
//           onDelete={onDelete}
//         />
//       ))}
//     </tbody>
//   </table>;
// }
