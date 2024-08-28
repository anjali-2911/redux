import { ADD_TO_CART, REMOVE_TO_CART } from '../Constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
             console.warn("reducer add",action)
            return [
                ...state,
                {cardData: action.data}
            ]

            case REMOVE_TO_CART:
                console.warn("reducer remove",action)
                state.pop();
               return [
                
                   ...state,
               ]
        default:
            return state
    }
}