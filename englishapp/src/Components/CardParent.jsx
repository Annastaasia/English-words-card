import React from "react";
import cards from "../utils/card";

class CardParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: cards[0],
    };
  }

  tick = () => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex === this.props.cards.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    this.setState({
      activeIndex,
    });
  };

  render() {
    return (
      <div>
        {this.props.cards[this.state.activeIndex]}
        <button onClick={this.tick}>show Next</button>
      </div>
    );
  }
}

export default CardParent;
