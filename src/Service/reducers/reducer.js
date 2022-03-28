import { ADD_TO_CART, REMOVE_TO_CART } from "../constants"
const initialState = {
    cardData: []
    
}
export default function cardItem(state = initialState,action) {
    

    switch (action.type) {
        case ADD_TO_CART:
            console.log('reducer',action)
        return {
                ...state,
                cardData: action.data                  
        }
        case REMOVE_TO_CART:
            return{
                ...state,

    }
        
            break;
            default:
                return state
    }
}