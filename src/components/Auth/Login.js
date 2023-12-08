import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomTextInput from "../commons/CustomTextInput";
import CustomButton from "../commons/CustomButton";
import staticContents from "../../utils/staticContents";
import styles from "../../utils/styles/styles";
import { colors } from "../../utils/styles/colors";
import { login } from "../../stores/actions/authActions";
import { connect, useDispatch } from "react-redux";

const Login = ({ login, error, navigation }) => {
  const [credentials, setCredentials] = useState({
    useremail: "",
    userpassword: "",
  });
  const [hidepassword, setHidePassword] = useState(true);
  const dispatch = useDispatch();
  const isEmailValid = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    // Password should be at least 6 characters long
    return password.length >= 6;
  };
  const handleLogin = () => {
    // if (!credentials.username || !credentials.userpassword) {
    //   ToastAndroid.show(
    //     "Please fill in all fields",
    //     ToastAndroid.showWithGravity
    //   );
    //   return;
    // }
    // if (!isEmailValid(credentials.useremail)) {
    //   ToastAndroid.show(
    //     "Please enter a valid email address",
    //     ToastAndroid.showWithGravity
    //   );
    //   return;
    // }
    // if (!isPasswordValid(credentials.userpassword)) {
    //   ToastAndroid.show(
    //     "Password should be at least 6 characters long",
    //     ToastAndroid.showWithGravity
    //   );
    //   return;
    // }
    login(credentials, navigation);
  };
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.WHITE }]}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo_style}
      />
      <Text style={styles.TopText}> Sign In </Text>
      <View style={styles.card2}>
        <View style={{ marginTop: 10 }}>
          <CustomTextInput
            placeholder=" Enter email address"
            value={credentials.useremail}
            onChangeText={(text) =>
              setCredentials({ ...credentials, useremail: text })
            }
          />

          <View style={styles.eyebutton_style}>
            <View style={{ flexDirection: "row" }}>
              <CustomTextInput
                placeholder={staticContents.enter_password}
                value={credentials.userpassword}
                onChangeText={(text) =>
                  setCredentials({ ...credentials, userpassword: text })
                }
                secureTextEntry={hidepassword}
              />
            </View>

            <TouchableOpacity
              style={styles.eye_icon_style}
              onPress={() => setHidePassword(!hidepassword)}
            >
              <Image
                source={
                  hidepassword
                    ? require("../../assets/hidden.png")
                    : require("../../assets/view.png")
                }
                style={styles.eye_icon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ alignSelf: "flex-end", marginTop: 12, marginEnd: "7%" }}
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            <Text style={[styles.BottomTxt, { fontSize: 12 }]}>
              {staticContents.forget_password_main_text}
            </Text>
          </TouchableOpacity>

          <View style={{ marginTop: "8%" }}>
            <CustomButton
              title={"Sign In"}
              onClick={() => {
                handleLogin();
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={styles.BottomTxt}>
              {staticContents.dont_have_acc_text}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                style={[
                  styles.BottomTxt,
                  { color: colors.DARK_BLACK, fontSize: 14 },
                ]}
              >
                {" "}
                {staticContents.create_new_text}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
