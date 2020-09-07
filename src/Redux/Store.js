import { createStore, applyMiddleware } from "redux";
import Thunk from 'redux-thunk'
import logger from 'redux-logger'
import Reducers from "./Reducers";


const middlewares= [Thunk,logger]
const store = createStore(Reducers,applyMiddleware(...middlewares))

export default store;
