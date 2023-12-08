import { Text, View, StatusBar, Image } from "react-native";
import React, { useEffect } from "react";
import { IMAGES, getImageFromURL } from "../resources/images";
import { colors } from "../utils/styles/colors";
import styles from "../utils/styles/styles";
import { Init } from "../stores/actions/authActions";
import { connect, useDispatch } from "react-redux";
const SplashScreen = ({navigation}) => {
  // useEffect(() => {
  //   funcNavigate();
  // }, []);
  // const funcNavigate = async () => {
  //   setTimeout(() => {
  //     if (token != null) {
  //       navigation.reset({
  //         index: 0,
  //         routes: [{ name: "HomeScreen" }],
  //       });
  //     } else {
  //       navigation.reset({
  //         index: 0,
  //         routes: [{ name: "Login" }],
  //       });
  //     }
  //   }, 2000);
  // };
  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init(navigation));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[styles.containerApp, { backgroundColor: colors.WHITE }]}>
      <StatusBar barStyle={"light-content"} />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ height: 250, width: 250, resizeMode: "contain" }}
          source={getImageFromURL(IMAGES.LOGO)}
        />
        <Text
          style={{
            color: "white",
            fontSize: 18,
            marginTop: -20,
            fontWeight: "700",
          }}
        >
          Kaufli
        </Text>
      </View>
    </View>
  );
};
const mapDispatchToProps = () => ({
  Init,
});
export default connect(null, mapDispatchToProps)(SplashScreen);
