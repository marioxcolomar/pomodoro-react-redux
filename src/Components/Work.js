import React from "react";

const Work = props => (
  <div className="col-6">
    <div>
      <h3>Work component</h3>
    </div>
    <div className="row">
      <button
        className="col-2 btn-sm fa fa-chevron-down"
        disabled={props.value <= 20 ? true : false}
        onClick={() => props.decreaseCounter("session")}
      />
      <h3 className="col-8">{props.value}</h3>
      <button
        className="col-2 btn-sm fa fa-chevron-up"
        disabled={props.value >= 60 ? true : false}
        onClick={() => props.addCounter("session")}
      />
    </div>
  </div>
);

export default Work;
