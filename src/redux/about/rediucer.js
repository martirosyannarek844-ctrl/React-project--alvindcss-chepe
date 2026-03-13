import { COMENT_CREATE, COMENT_DELETE, DECREMENT, INCREMENT, INPUT_TEXT } from "./type"

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

             case COMENT_CREATE:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }

        case COMENT_DELETE:
            return (() => {
                const { id } = action
                const { comments } = state
                const itemIndex = comments.findIndex(res => res.id === id)

                const nextComments = [
                    ...comments.slice(0, itemIndex),
                    ...comments.slice(itemIndex + 1)
                ];
                return {
                    ...state,
                    comments: nextComments
                }
            })();
        default:
            return state
    }
}
