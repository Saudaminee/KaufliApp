// Login.js
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Animated,
  Platform,
  TouchableOpacity,
} from "react-native";
import { IMAGES, getImageFromURL } from "../../resources/images";
import styles from "../../utils/styles/styles";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authActions";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false, // false because 'backgroundColor' is not supported by the native driver
    }).start();
  }, [animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 0],
  });

  const handleLogin = () => {
    const userData = { email, password };
    dispatch(login(userData));
    // Add logic to navigate to the home screen upon successful login
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.containerApp}>
      <Image
        style={{
          height: 180,
          width: 180,
          resizeMode: "contain",
          justifyContent: "center",
          alignSelf: "center",
        }}
        source={getImageFromURL(IMAGES.LOGO)}
      />
      <View style={styles.card}>
        <Text style={styles.loginText}>Welcome Back.</Text>
        <Text style={styles.continueText}>Sign in to continue </Text>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <View
            style={
              (styles.inputBox,
              {
                ...(Platform.OS === "android"
                  ? { elevation: 1, overflow: "hidden" }
                  : {
                      shadowColor: "black",
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.3,
                      shadowRadius: 3.84,
                    }),
              })
            }
          >
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </Animated.View>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </Animated.View>
        <Text style={styles.forgotPassText}>Forgot password?</Text>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.login_txt}>Sign in </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CreteNewButton}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.Createnew_txt}>Create New</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default Login;
