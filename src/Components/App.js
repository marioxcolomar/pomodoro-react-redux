import React from 'react';
import '../styles/App.css';
import Break from './Break';
import Work from './Work';
import Header from './Header';
import Clock from './Clock';

const App = props => (
  <div className="container text-center">
    <Header />
    <div className="row">
      <Break
        name={'break'}
        value={props.breakLength}
        addCounter={props.addCounter}
        decreaseCounter={props.decreaseCounter} 
      />
      <Work
        name={'session'}
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
