import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const CustomButton = ({ title, onClick }) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        onClick();
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 14,
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get("window").width - 50,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    backgroundColor: "#C3E704",
    borderRadius: 10,
  },
});
