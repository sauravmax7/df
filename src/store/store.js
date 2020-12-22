import thunk from "redux-thunk";
import { applyMiddleware, createStore,compose } from "redux";
import Reducers from "../reducers/reducers";


//--- MIDDLEWARE
// add middleware inside this function


const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//--- STORE

const store= createStore(Reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
