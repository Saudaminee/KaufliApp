import actionTypes from "../actionTypes";

// reducers/authReducer.js

const initialState = {
  user: null,
  error: null,
  token: null,
  address: [],
};

const authReducer = (state = initialState, action) => {
  console.log("state", state);
  console.log("action", action);
  console.log("action.payload", action.payload);
  console.log("action.payload:", action.type);
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload.userData,
        error: null,
        token: action.payload.token,
      };
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
        token: null,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    case actionTypes.ADD_ADDRESS:
      return [...state, action.payload];
    case actionTypes.REMOVE_ADDRESS:
      const deleteArray1 = state.address.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteArray1;
    //return initialState;
    default:
      return state;
  }
};

export default authReducer;
