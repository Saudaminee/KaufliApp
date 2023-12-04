import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
const CustomTextInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  type,
  title,
  ...props
}) => {
  return (
    <View style={styles.Container}>
      <TextInput
        style={{
          width: "100%",
          marginLeft: 5,
          padding: 5,
        }}
        {...props}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        type={[styles.Container, styles[`Container_${type}`]]}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  Container: {
    width: Dimensions.get("window").width - 50,
    height: 35,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: "center",
    marginTop: "5%",
    borderColor: "#e3e3e3",
  },
});
