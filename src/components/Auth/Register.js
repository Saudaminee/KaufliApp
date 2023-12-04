// Register.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { register } from "../../actions/authActions";
import styles from "../../utils/styles/styles";
import CustomButton from "../commons/CustomButton";
import CustomTextInput from "../commons/CustomTextInput";
import staticContents from "../../utils/staticContents";
const Register = ({ navigation }) => {
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [usermobile, setUserMobile] = useState("");
  const [useraddress, setUserAddress] = useState("");
  const [userconfirmPass, setUserConfirmpass] = useState("");
  const [errortext, setErrortext] = useState("");
  const [hidepassword, setHidePassword] = useState(true);
  const [confirnHidepassword, setConfirmHidePassword] = useState(true);
  const dispatch = useDispatch();

  const handleRegister = ({ navigation }) => {
    const userData = { useremail, userpassword };
    dispatch(register(userData));
    // Add logic to navigate to the home screen upon successful registration.
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
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
            value={username}
            onChangeText={(txt) => setUserName(txt)}
          />
          <CustomTextInput
            placeholder={staticContents.enter_email}
            value={useremail}
            onChangeText={(txt) => setUserEmail(txt)}
          />
          <CustomTextInput
            placeholder={staticContents.enter_mobile}
            value={usermobile}
            onChangeText={(txt) => setUserMobile(txt)}
            keyboardType="numeric"
            maxLength={10}
          />
          <CustomTextInput
            placeholder={staticContents.enter_address}
            value={useraddress}
            onChangeText={(txt) => setUserAddress(txt)}
          />
        </View>
        <View style={styles.eyebutton_style}>
          <View style={{ flexDirection: "row" }}>
            <CustomTextInput
              placeholder={staticContents.enter_password}
              value={userpassword}
              onChangeText={(txt) => setUserPassword(txt)}
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
              value={userconfirmPass}
              onChangeText={(txt) => setUserConfirmpass(txt)}
              secureTextEntry={hidepassword}
            />
          </View>

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
              handleRegister();
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
                style={[styles.BottomTxt, { color: "#C3E704", fontSize: 14 }]}
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

export default Register;
