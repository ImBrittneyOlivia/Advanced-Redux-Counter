import React from "react";
import Counter from "./Counter";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  reset,
  inputNumber,
  inputNumberChange
} from "../actions/index";

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter
          count={this.props.count}
          timesClicked={this.props.timesClicked}
          onIncrement={this.props.onIncrement}
          onDecrement={this.props.onDecrement}
          onInputNumber={this.props.onInputNumber}
          onInputNumberChange={this.props.onInputNumberChange}
          onReset={this.props.onReset}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputNumber: () => dispatch(inputNumber()),
    onInputNumberChange: number => dispatch(inputNumberChange(number)),
    onReset: () => dispatch(reset())
  };
}
function mapStateToProps(state) {
  return {
    count: state.count,
    timesClicked: state.timesClicked,
    numberInputted: state.numberInputted
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
