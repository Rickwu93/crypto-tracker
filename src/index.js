import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//importing store will require provider from redux
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import 'antd/dist/reset.css';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App /> 
        </Provider>
    </Router>, 
    document.getElementById('root')
);