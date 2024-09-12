import { ADD_TO_CART, REMOVE_TO_CART } from '../Constants';

const initialState = {
    cardData: []
};

export default function cardItems(state = initialState.cardData, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducer add", action);
            return [
                ...state,
                { cardData: action.data }
            ];

        case REMOVE_TO_CART:
            console.warn("reducer remove", action);
            // Assuming you want to remove the last item, return a new array without it
            return state.slice(0, -1);

        default:
            return state;
    }
}
