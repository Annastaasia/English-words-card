import { useState } from "react";
import Card from "../Card/Card";

function CardLearn() {
  const [learnWords, setLearnWords] = useState(0);

  // const [data, setData] = useState("");

  // const childToParent = (childdata) => {
  //   setData(childdata);
  // };

  const data = (childdata) => {
    setLearnWords(learnWords + 1);
  };
  return (
    <>
      {data}
      <p>You learn {learnWords} cards</p>
      <Card data={data} />
    </>
  );
}

export default CardLearn;
