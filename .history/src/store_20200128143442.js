import { createStore, applyMiddleware, compose } from "redux";

import thunk from "react-redux";

import reducerPrincipal from "./reducers";


const inicialState = {};

const middleWare = [thunk];

const store = createStore(reducerPrincipal, inicialState, compose(applyMiddleware(...middleWare),

));

export default store;ß