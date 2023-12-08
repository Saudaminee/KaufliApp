// authReducer.js
const initialState = {
  user: null,
  isAuthenticated: false,
  // other relevant state properties
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      // handle login logic, update state accordingly
      return { ...state, user: action.payload };
    case "REGISTER":
      // handle register logic, update state accordingly
      return state;
    default:
      return state;
  }
};

export default authReducer;
