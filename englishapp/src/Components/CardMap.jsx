import Card from "./Card.jsx";
import cards from "../utils/card.js";

export default function CardMap() {
  return (
    <main>
      <div className="container__onecard">
        {cards.map((card, i) => (
          <Card
            key={i}
            word={card.word}
            transcription={card.transcription}
            hint={card.hint}
            translate={card.translate}
          />
        ))}
      </div>
    </main>
  );
}
