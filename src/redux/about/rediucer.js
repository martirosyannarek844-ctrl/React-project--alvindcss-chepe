import { INPUT_TEXT } from "./type"

const initialSate ={
    text: ''
}

export const likeRediucer = (state = initialSate, action) =>{
    switch(action.type){
        case INPUT_TEXT:
            return{
                ...state,
                text: action.text
            }

            default: 
            return state
    }
}