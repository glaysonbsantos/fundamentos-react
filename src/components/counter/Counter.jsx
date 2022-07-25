import "./Counter.css";
import React, { Component } from "react";

import Display from "./Display";
import Step from "./Step";
import Buttons from "./Buttons";

class Counter extends Component {
  state = {
    num: this.props.initialNum || 0,
    step: this.props.initialStep || 1,
  };

  inc = () => {
    this.setState({
      num: this.state.num + this.state.step,
    });
  };

  dec = () => {
    this.setState({
      num: this.state.num - this.state.step,
    });
  };

  setStep = (newStep) => {
    this.setState({
      step: newStep,
    });
  };

  erase = (event) => {
    this.setState({
      num: this.props.initialNum,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Contador</h2>
        <Display number={this.state.num} />
        <Step step={this.state.step} setStep={this.setStep} />
        <Buttons onInc={this.inc} onDec={this.dec} />
        <div>
          <button id="eraser" onClick={this.erase}>
            Zerar Contador
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
