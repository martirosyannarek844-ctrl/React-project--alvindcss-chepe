import { legacy_createStore as createStore,  applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootRediucer from "./rootrediucer";


const middleware = applyMiddleware(thunk)

export const store =createStore(rootRediucer, middleware)