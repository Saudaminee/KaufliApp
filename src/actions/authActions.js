// authActions.js
export const login = (userData) => {
    return (dispatch) => {
      // implement login logic
      dispatch({ type: 'LOGIN', payload: userData });
    };
  };
  
  export const register = (userData) => {
    return (dispatch) => {
      // implement register logic
      dispatch({ type: 'REGISTER', payload: userData });
    };
  };
  