import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import reducerPrincipal from "./reducers";


const inicialState = [];

const middleWare = [thunk];

const store = createStore(reducerPrincipal, inicialState, compose(applyMiddleware
    (...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


));

export default store;