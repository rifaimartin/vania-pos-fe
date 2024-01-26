import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import {createStore} from 'redux'
import AdminContainer from "./components/admin/AdminContainer";
import {reducers} from "./reducers/CombineReducers";

// import 'font-awesome/css/font-awesome.min.css';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route  exatch path="/" component={AdminContainer}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
