import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

import { createStore, applyMiddleware } from 'redux'
import reducers from './modules';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

const logger = createLogger(); 
const store = createStore(reducers, applyMiddleware(logger));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
