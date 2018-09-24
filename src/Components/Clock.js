import React from 'react';

const Clock = props => (
    <div>
        <div>
            <h3>Clock component</h3>
        </div>
        <div>
            <p>Break length: {props.breakLength}</p>
            <p>Session length: {props.sessionLength}</p>
            <h1>00:00</h1>
            <button>Start</button>
        </div>
    </div>
);

export default Clock;