// actions/authActions.js
import actionTypes from "../actionTypes";
import { ToastAndroid } from "react-native";
import { setItem, getItem, removeItem } from "../../utils/AsyncStorageHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = (navigation) => {
  return async (dispatch) => {
    let token = await getItem("authToken");
    if (token !== null) {
      console.log("token fetched");
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: token,
      });
      navigation.navigate("HomeScreen");
    } else {
      navigation.navigate("Login");
    }
  };
};

export const login = (userData, navigation) => async (dispatch) => {
  let token = null;
  try {
    const USER_EMAIL = await getItem("USER_EMAIL");
    if (userData.useremail === USER_EMAIL) {
      token = userData.useremail + userData.userpassword;
      await setItem("authToken", JSON.stringify(token));
      ToastAndroid.show("token stored", ToastAndroid.showWithGravity);

      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: { userData, token },
      });
      navigation.navigate("HomeScreen");
    } else {
      ToastAndroid.show("Invalid credentials", ToastAndroid.showWithGravity);
    }
  } catch (error) {
    // Dispatch failure action
    dispatch({
      type: actionTypes.LOGIN_FAILURE,
      payload: "Invalid credentials",
    });
  }
};

export const signup = (userData, navigation) => async (dispatch) => {
  console.log("userData", userData);
  let token = null;
  try {
    token = userData.useremail + userData.userpassword;
    await setItem("authToken", token);
    // Dispatch success action
    dispatch({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: { userData, token },
    });
    // Save user data in AsyncStorage
    await setItem("USER_EMAIL", userData.useremail);

    ToastAndroid.show(
      "User registration sucessfully",
      ToastAndroid.showWithGravity
    );
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  } catch (error) {
    // Dispatch failure action
    dispatch({ type: actionTypes.SIGNUP_FAILURE, payload: "Signup failed" });
  }
};

export const logout =
  ({ navigation }) =>
  async (dispatch) => {
    try {
      // Remove authentication-related data from AsyncStorage
      await AsyncStorage.removeItem("authToken");

      // Dispatch the logout action
      dispatch({ type: actionTypes.LOGOUT });
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

export const addAddress = () => {
  dispatch({ type: actionTypes.ADD_ADDRESS, payload: userData });
};

export const removeAddress = (index) => {
  dispatch({ type: actionTypes.ADD_ADDRESS, payload: userData });
};
