import React from "react";

const Counter = ({
  count,
  onDecrement,
  onIncrement,
  onReset,
  timesClicked,
  onInputNumberChange,
  numberInputted,
  onInputNumber
}) => {
  return (
    <div className="counter-container">
      <div>
        <div className="counter-output">
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
        </div>

        <br />
        <div className="times-clicked-output">
          <span>
            Times the increment/decrement buttons have been clicked:
            {timesClicked}
          </span>
        </div>

        <br />
        <div className="input-section">
          <input
            type="text"
            onChange={event => onInputNumberChange(event.target.value)}
            value={numberInputted}
          />
          <button onClick={onInputNumber}>Change Count</button>
          <button onClick={onReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
