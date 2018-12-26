import React from "react";

const Break = props => (
  <div className="col-6">
    <div>
      <h3>Break component</h3>
    </div>
    <div className="row">
      <button
        className="col-2 btn-sm fa fa-chevron-down"
        disabled={props.value <= 3 ? true : false}
        onClick={() => props.decreaseCounter("break")}
      />
      <h3 className="col-8">{props.value}</h3>
      <button
        className="col-2 btn-sm fa fa-chevron-up"
        disabled={props.value >= 10 ? true : false}
        onClick={() => props.addCounter("break")}
      />
    </div>
  </div>
);

export default Break;
