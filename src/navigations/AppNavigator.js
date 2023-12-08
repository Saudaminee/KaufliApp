// AppNavigator.js
import React from "react";
import { colors } from "../utils/styles/colors";
import staticContents from "../utils/staticContents";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import DetailedScreen from "../screens/DetailedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Notifications from "../screens/Notifications";
import BottomTabsManager from "../navigations/BottomTabsManager";
import OrderHistory from "../screens/OrderHistory";
import { connect } from "react-redux";
const Stack = createStackNavigator();

const AppNavigator = ({ token }) => {
  console.log("token,", token);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: staticContents.app_name_txt,
          headerStyle: {
            backgroundColor: colors.BASE_TEXT_COLOR,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={BottomTabsManager}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailedScreen"
          component={DetailedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => ({
  token: state.auth.token,
});
export default AppNavigator;
//export default connect(mapStateToProps)(AppNavigator);
