import React from 'react';

const Break = props => (
    <div className="col-6">
        <div>
            <h3>Break component</h3>
        </div>
        <div className="">
            <button className="btn-sm" 
                disabled={props.value <= 3? true: false} 
                onClick={() => props.decreaseCounter('break')}
                >-</button>
            <h3>{props.value}</h3>
            <button className="btn-sm" 
                disabled={props.value >= 10? true: false}
                onClick={() => props.addCounter('break')}
                >+</button>
        </div>
     </div>
);

export default Break;