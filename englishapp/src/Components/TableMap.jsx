import Table from "./Table.jsx";
import cards from "../utils/card.js";

export default function TableMap() {
  return (
    <main>
      <div className="container__cards">
        {cards.map((card, i) => (
          <Table
            key={i}
            number={card.number}
            word={card.word}
            transcription={card.transcription}
            translate={card.translate}
          />
        ))}
      </div>
    </main>
  );
}
