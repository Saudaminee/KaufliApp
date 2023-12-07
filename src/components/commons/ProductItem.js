import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { IMAGES, getImageFromURL } from "../../resources/images";
import { colors } from "../../utils/styles/colors";
import { useNavigation } from "@react-navigation/native";
const ProductItem = ({
  image,
  price,
  shortDetail,
  offer,
  id,
  name,
  discount,
}) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState(false);
  const handlePress = () => {
    setIsLiked(!isLiked);
  };
  var data = {
    id: id,
    name: name,
    image: image,
    price: price,
    shortDetail: shortDetail,
    offer: offer,
    discount: discount,
  };
  const goToDetailedScreen = () => {
    navigation.navigate("DetailedScreen", (data = { data }));
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToDetailedScreen()}
    >
      <ImageBackground source={image} style={styles.image}>
        {/* <Text style={{ right: '5%', position: 'absolute' }}>{price}</Text> */}
        <TouchableOpacity
          style={styles.like}
          onPress={handlePress}
          // style={{ backgroundColor: isLiked ? styles.like : styles.like }}
        >
          <Image
            source={
              isLiked
                ? getImageFromURL(IMAGES.LIKE)
                : getImageFromURL(IMAGES.UNLIKE)
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </ImageBackground>

      <Text style={styles.price}>{price}</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.offer}>{offer}</Text>
        <Text style={styles.shortDetail}>{shortDetail}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.GRAYS_WHITE,
    borderRadius: 8,
    padding: 8,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover", // or 'contain' based on your preference
    borderRadius: 8,
    marginBottom: 8,
    // borderWidth:1,
    overflow: "hidden",
    position: "relative", // or 'absolute' based on your layout
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    alignSelf: "center",
    color: colors.BASE_TEXT_COLOR,
    marginBottom: 4,
  },
  shortDetail: {
    fontSize: 12,
    marginBottom: 4,
    color: colors.BLACK,
  },
  offer: {
    fontSize: 11,
    color: "green",
  },
  like: {
    width: 28,
    height: 28,
    backgroundColor: colors.GRAYS_WHITE,
    right: "5%",
    marginTop: 5,
    position: "absolute",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 10,
    width: 10,
    resizeMode: "contain",
  },
});
