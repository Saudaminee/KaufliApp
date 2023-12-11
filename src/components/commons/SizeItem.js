import React from "react";
import { View, Image, Text,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../utils/styles/colors";
// import styles from "../../utils/styles/styles";
const SizeItem = ({id, title}) => {
  return (
    <View style={styles.containerCategory}>
    {/* <Image source={image} style={styles.categoryStyle} /> */}
    <TouchableOpacity style={styles.categoryStyle}>
      <Text
        style={{ textAlign: "center", fontSize: 11, color: colors.BLACK }} >
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);
}

export default SizeItem

const styles = StyleSheet.create({
    containerCategory: {
        marginVertical: 10,
      },
      categoryStyle: {
        width: 45,
        height: 45,
        elevation:3,
        backgroundColor: colors.GRAYS_WHITE,
        borderColor: colors.GRAYS_WHITE,
        // borderWidth: 1,
        borderRadius: 50,
        marginRight: 16,
        justifyContent:'center',
        alignItems:'center'
    },
})