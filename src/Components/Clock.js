import React from "react";

const Clock = props => (
  <div>
    <div>
      <h3>Clock component</h3>
    </div>
    <div>
      <p>Break length: {props.breakLength}</p>
      <p>Session length: {props.sessionLength}</p>
      <button className="btn-lg fa fa-play-circle-o" />
      <button className="btn-lg fa fa-stop-circle-o" />
      <button className="btn-lg fa fa-repeat" />
    </div>
  </div>
);

export default Clock;
