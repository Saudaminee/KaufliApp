import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomTextInput from "../commons/CustomTextInput";
import CustomButton from "../commons/CustomButton";
import staticContents from "../../utils/staticContents";
import styles from "../../utils/styles/styles";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidepassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo_style}
      />
      <Text style={styles.TopText}> Sign In </Text>
      <View style={styles.card2}>
        <View style={{ marginTop: 10 }}>
          <CustomTextInput
            placeholder=" Enter email address"
            value={email}
            onChangeText={(txt) => setEmail(txt)}
          />

          <View style={styles.eyebutton_style}>
            <View style={{ flexDirection: "row" }}>
              <CustomTextInput
                placeholder={staticContents.enter_password}
                value={password}
                onChangeText={(txt) => setPassword(txt)}
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
                navigation.navigate("DetailedScreen");
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
                style={[styles.BottomTxt, { color: "#C3E704", fontSize: 14 }]}
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

export default Login;
