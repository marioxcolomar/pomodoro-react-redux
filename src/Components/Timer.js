import React from "react";
import '../styles/Timer.css';

const Timer = props => (
  <div className="timer">
    <h2>{props.name}</h2>
    <div className="buttons">
      <button
        className="btn-sm btn-success fa fa-chevron-down"
        onClick={() => props.decreaseCounter(props.typeName)}
      />
      <h3>{props.value}</h3>
      <button
        className="btn-sm btn-success fa fa-chevron-up"
        onClick={() => props.addCounter(props.typeName)}
      />
    </div>
  </div>
);

export default Timer;
