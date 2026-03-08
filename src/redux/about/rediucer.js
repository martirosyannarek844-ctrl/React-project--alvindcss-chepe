import { DECREMENT, INCREMENT, INPUT_TEXT } from "./type"

const initialSate = {
    likes: 0,
    text: ''
}

export const likeRediucer = (state = initialSate, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                text: action.text
            }

        case DECREMENT:
            return {
                ...state,
                likes: state.likes - 1
            }

        case INCREMENT:
            return {
                ...state,
                likes: state.likes + 1
            }
        default:
            return state
    }
}
