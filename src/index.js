import React from 'react';
import { render } from 'react-dom';
// createStore, creates the store that will maintint the Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from "./App";
import rootReducer from "./reducers";

import "./index.css";



// Reducer: a pure function that receives an input and creates an output, and the output is the state or store in redux (entire state of the app)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
   
)