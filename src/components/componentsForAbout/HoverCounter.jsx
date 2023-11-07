import React, {Component} from "react";

class HoverCounter extends Component {
  state = {
    count: 0,
  };
  decrement = () => {
    this.setState({count: this.state.count - 1});
  };
  render() {
    const {count} = this.state;
    return (
      <div>
        <h2></h2> <br />
        <button onMouseOver={this.decrement}>Count :{count}</button>
        <br />
        <br />
      </div>
    );
  }
}

export default HoverCounter;
