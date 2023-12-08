// Register.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";
import styles from "../../utils/styles/styles";
import CustomButton from "../commons/CustomButton";
import CustomTextInput from "../commons/CustomTextInput";
import staticContents from "../../utils/staticContents";
import { colors } from "../../utils/styles/colors";
import { connect } from "react-redux";
import { signup } from "../../stores/actions/authActions";
const Register = ({ navigation, signup, isAuthenticated, error }) => {
  const [userData, setuserData] = useState({
    username: "",
    useremail: "",
    usermobile: "",
    userpassword: "",
    useraddress: "",
    userconfirmPass: "",
  });
  const [errortxt, setErrortxt] = useState("");
  const [hidepassword, setHidePassword] = useState(true);
  const [confirnHidepassword, setConfirmHidePassword] = useState(true);

  const isEmailValid = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    // Password should be at least 6 characters long
    return password.length >= 6;
  };
  const isMobileValid = (mobile) => {
    // Basic mobile number validation
    return /^[0-9]{10}$/.test(mobile);
  };
  const handleSignup = () => {
    // Basic validation
    if (
      !userData.username ||
      !userData.userconfirmPass ||
      !userData.userpassword ||
      !userData.usermobile ||
      !userData.useremail ||
      !userData.useraddress
    ) {
      ToastAndroid.show(
        "Please fill in all fields",
        ToastAndroid.showWithGravity
      );
      return;
    }

    if (!isEmailValid(userData.useremail)) {
      ToastAndroid.show(
        "Please enter a valid email address",
        ToastAndroid.showWithGravity
      );
      return;
    }
    if (!isMobileValid(userData.usermobile)) {
      ToastAndroid.show(
        "Please enter a valid 10-digit mobile number",
        ToastAndroid.showWithGravity
      );
      return;
    }
    if (!isPasswordValid(userData.userpassword)) {
      ToastAndroid.show(
        "Password should be at least 6 characters long",
        ToastAndroid.showWithGravity
      );
      return;
    }
    if (userData.userpassword !== userData.userconfirmPass) {
      ToastAndroid.show(
        "Password confirm password doesn't match",
        ToastAndroid.showWithGravity
      );
      return;
    }
    // Dispatch the signup action
    signup(userData, navigation);
  };

  return (
    <View style={styles.container}>
      {/* back Button */}
      <TouchableOpacity
        style={styles.backbtnView}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../assets/arrow.png")}
          style={styles.backicon}
        />
      </TouchableOpacity>

      <Text style={styles.LogRegText}>Sign Up</Text>
      <Text style={{ fontSize: 15, marginTop: 10, fontWeight: "400" }}>
        Please enter your account here!
      </Text>

      <View style={styles.card1}>
        <View style={{ marginTop: 10 }}>
          <CustomTextInput
            placeholder={staticContents.enter_name}
            value={userData.username}
            onChangeText={(txt) => setuserData({ ...userData, username: txt })}
          />
          <CustomTextInput
            placeholder={staticContents.enter_email}
            value={userData.useremail}
            onChangeText={(txt) => setuserData({ ...userData, useremail: txt })}
          />
          <CustomTextInput
            placeholder={staticContents.enter_mobile}
            value={userData.usermobile}
            onChangeText={(txt) =>
              setuserData({ ...userData, usermobile: txt })
            }
            keyboardType="numeric"
            maxLength={10}
          />
          <CustomTextInput
            placeholder={staticContents.enter_address}
            value={userData.useraddress}
            onChangeText={(txt) =>
              setuserData({ ...userData, useraddress: txt })
            }
          />
        </View>
        <View style={styles.eyebutton_style}>
          <View style={{ flexDirection: "row" }}>
            <CustomTextInput
              placeholder={staticContents.enter_password}
              value={userData.userpassword}
              onChangeText={(txt) =>
                setuserData({ ...userData, userpassword: txt })
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
        <View style={styles.eyebutton_style}>
          <View style={{ flexDirection: "row" }}>
            <CustomTextInput
              placeholder={staticContents.enter_confirmpassword}
              value={userData.userconfirmPass}
              onChangeText={(txt) =>
                setuserData({ ...userData, userconfirmPass: txt })
              }
              secureTextEntry={hidepassword}
            />
          </View>
          {errortxt && <Text style={{ color: "red" }}>{error}</Text>}
          <TouchableOpacity
            style={styles.eye_icon_style}
            onPress={() => setConfirmHidePassword(!confirnHidepassword)}
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
        <View style={{ marginTop: "8%" }}>
          <CustomButton
            title={"Sign Up"}
            onClick={() => {
              handleSignup();
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={styles.BottomTxt}>
              {staticContents.have_account_text}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={[
                  styles.BottomTxt,
                  { color: colors.DARK_BLACK, fontSize: 14 },
                ]}
              >
                {staticContents.sign_in_text}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(Register);
