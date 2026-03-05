import { combineReducers } from "redux";
import { likeRediucer } from "./about/rediucer";

const rootRediucer = combineReducers({
    text: likeRediucer
})

export default rootRediucer