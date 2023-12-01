// authReducer.js
const initialState = {
    user: null,
    // other relevant state properties
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        // handle login logic, update state accordingly
        return state;
      case 'REGISTER':
        // handle register logic, update state accordingly
        return state;
      default:
        return state;
    }
  };
  
  export default authReducer;
  