// App.js
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/stores/store";
import AppNavigator from "./src/navigations/AppNavigator";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
