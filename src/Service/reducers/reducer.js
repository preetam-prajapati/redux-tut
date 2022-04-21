import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";
const initialState = {
  counts: { Hamburger: 0, Fries: 0, Coke: 0, Pepsi: 0 }
};
export default function cardItem(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("reducer", state);
      let addName = action.data.name;
      let addValue = state.counts[addName] + 1;
      return {
        ...state,
        counts: {
          ...state.counts,
          [addName]: addValue
        }
      };
    case REMOVE_TO_CART:
      let removeName = action.data.name;
      let removeValue = state.counts[removeName] - 1;
      return {
        ...state,
        counts: {
          ...state.counts,
          [removeName]: removeValue
        }
      };
    default:
      return state;
  }
}
