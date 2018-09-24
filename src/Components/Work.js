import React from 'react';

const Work = props => (
    <div className="col-6">
        <div>
            <h3>Work component</h3>
        </div>
        <div className="">
            <button className="btn-sm" 
                disabled={props.value <= 20? true: false}
                onClick={() => props.decreaseCounter('session')}
                >-</button>
            <h3>{props.value}</h3>
            <button className="btn-sm" 
                disabled={props.value >= 60? true: false}
                onClick={() => props.addCounter('session')}
                >+</button>
        </div>
    </div>
);

export default Work;