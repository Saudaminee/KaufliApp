import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "../utils/styles/styles";

const DetailedScreen = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "red",
        width: "100%",
      }}
    >
      <View style={{ width: "60%", backgroundColor: "pink" }}>
        <TouchableOpacity
          style={styles.backbtnView}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../assets/arrow.png")}
            style={styles.backicon}
          />
        </TouchableOpacity>
      </View>

      {/* Right - Notification and Like Icons */}
      <View
        style={{
          backgroundColor: "blue",
          width: "40%",
          flexDirection: "row",
        }}
      >
        <View style={{ backgroundColor: "red", width: "25%" }}>
          <TouchableOpacity
            style={styles.backbtnView}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../assets/heart.png")}
              style={styles.backicon}
            />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "red", width: "25%" }}>
          <TouchableOpacity
            style={[styles.backbtnView, { marginStart: 40 }]}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require("../assets/share.png")}
              style={styles.backicon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailedScreen;
