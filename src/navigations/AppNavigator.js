// AppNavigator.js
import React from 'react';
import { colors } from '../utils/styles/colors';
import staticContents from '../utils/staticContents';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
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
      }}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }} />
   


    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigator;
