// authActions.js
export const login = (userData) => {
  return (dispatch) => {
    // implement login logic
    // dispatch({ type: 'LOGIN', payload: userData });
    // Simulate an API call for authentication
    if (username === "user" && password === "password") {
      // Successful login
      dispatch({ type: "LOGIN_SUCCESS", payload: { userData } });
    } else {
      // Failed login
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
};

export const register = (userData) => {
  return (dispatch) => {
    // implement register logic
    // dispatch({ type: "REGISTER", payload: userData });
    dispatch({ type: "SIGNUP_SUCCESS", payload: { userData } });
  };
};
