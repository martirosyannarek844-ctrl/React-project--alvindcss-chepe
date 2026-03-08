import { DECREMENT, INCREMENT, INPUT_TEXT } from "./type";

export function inputext(text){
    return{
        type: INPUT_TEXT,
        text
    }
}

export function decrementLikes(){
    return{
        type: DECREMENT
    }
}

export function incrementLikes(){
    return{
        type: INCREMENT
    }
}