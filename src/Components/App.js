import React from 'react';
import '../styles/App.css';
import Timer from './Timer';
import Clock from './Clock';

const App = props => (
  <div className="container mt-5 mb-5 p-4 border rounded text-center">
    <div className="d-flex">
      <Timer
        name='Break'
        typeName={'break'}
        value={props.breakLength}
        addCounter={props.addCounter}
        decreaseCounter={props.decreaseCounter}
      />
      <Timer
        name='Work'
        typeName={'work'}
        value={props.sessionLength}
        addCounter={props.addCounter}
        decreaseCounter={props.decreaseCounter}
      />
    </div>
    <Clock
      breakLength={props.breakLength}
      sessionLength={props.sessionLength} />
  </div>
);


export default App;
