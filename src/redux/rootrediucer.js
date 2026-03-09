import { combineReducers } from "redux";
import { likeRediucer } from "./about/rediucer";


const rootRediucer = combineReducers({
    likes: likeRediucer,
    text: likeRediucer
})

export default rootRediucer