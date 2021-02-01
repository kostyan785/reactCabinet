import React from 'react';
// Node
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
// Redux
import store from './redux/store'
// Own
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>        
    </React.StrictMode>,
    
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();