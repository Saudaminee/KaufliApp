// utils/AsyncStorageHelper.js
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  // console.log("key, value", key, value);
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving data to AsyncStorage:", error);
  }
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error("Error retrieving data from AsyncStorage:", error);
  }
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data from AsyncStorage:", error);
  }
};
