import {
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../components/commons/CustomButton";
import CustomTextInput from "../components/commons/CustomTextInput";
import styles from "../utils/styles/styles";
import staticContents from "../utils/staticContents";
const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.containerApp}>
      <TouchableOpacity
        style={styles.backbtnView}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/arrow.png")}
          style={styles.backicon}
        />
      </TouchableOpacity>

      <Text style={styles.forgorPassText}>
        {staticContents.forget_password_main_text}
      </Text>
      <Text style={styles.forgotPassSubText}>
        {staticContents.forget_password_sub_text}
      </Text>
      <View style={{ marginTop: 10 }}>
        <CustomTextInput
          placeholder={staticContents.enter_email}
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />
      </View>

      <View style={{ marginTop: "8%" }}>
        <CustomButton
          title={staticContents.forgot_button_text}
          onClick={() => {
            navigation.navigate("HomeScreen");
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
