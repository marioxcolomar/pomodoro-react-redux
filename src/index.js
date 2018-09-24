import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './Containers/App_container';
import registerServiceWorker from './registerServiceWorker';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import root_reducer from './reducers/root_reducer';

const root_store = createStore(root_reducer);

ReactDOM.render(
    <Provider store={root_store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
