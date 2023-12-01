import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
const initialState = {
  cartItem: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state;
    case REMOVE_FROM_CART:
      return state;
  }
};
export default cartReducer;
