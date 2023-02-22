import React from "react";
import CardMap from "./components/CardMap.jsx";

class Parent extends React.Component {
  state = {
    card: [0],
  };

  handleCallback = (childData) => {
    this.setState({ card: childData });
  };

  render() {
    const { card } = this.state;
    return (
      <div>
        <div> {card}</div>
        <CardMap parentCallback={this.handleCallback} />
      </div>
    );
  }
}

export default Parent;
