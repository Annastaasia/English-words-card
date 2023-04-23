import { useState } from "react";
import Card from "../../components/Card/Card";

function CardLearn() {
  const [learnWords, setLearnWords] = useState(0);

  const handleLearned = () => {
    setLearnWords(learnWords + 1);
  };
  return (
    <>
      <p className="cardlearn">You learned: {learnWords} words</p>
      <Card onLearned={handleLearned} />
    </>
  );
}

export default CardLearn;
