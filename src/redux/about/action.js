import { COMENT_CREATE, COMENT_DELETE, DECREMENT, INCREMENT, INPUT_TEXT } from "./type";

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

export function commentCreate(text, id){
    return{
        type: COMENT_CREATE,
        data: {text, id}
    }
}

export function commentDelete(id){
    return{
        type: COMENT_DELETE,
        id
    }
}