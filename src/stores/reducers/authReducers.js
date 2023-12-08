import actionTypes from "../actionTypes";

// reducers/authReducer.js

const initialState = {
  user: null,
  error: null,
  token: null,
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
    //return initialState;
    default:
      return state;
  }
};

export default authReducer;
