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
  import styles from "../../utils/styles/styles";

const WishlistItem = ({ item,image, price, shortDetail, offer, id, name }) => {
    const [wishlistItems, setWishlistItems] = useState([item.item])
    
    const navigation = useNavigation();
    const removeFromWishlist = (itemId) => {
        const updatedWishlist = wishlistItems.filter(item => item.id !== itemId);
        setWishlistItems(updatedWishlist);
      };

  return (
    <TouchableOpacity
      style={styles.wish_container}
    //   onPress={() => goToDetailedScreen()}
    >
      <ImageBackground source={image} style={styles.image}>
        {/* <Text style={{ right: '5%', position: 'absolute' }}>{price}</Text> */}
        <TouchableOpacity
          style={styles.remove}
          onPress={handlePress}
        >
          <Image
            source={
                getImageFromURL(IMAGES.REMOVE)
            }
            style={{height:18,width:18,tintColor:colors.DARK_RED}}
          />
        </TouchableOpacity>
      </ImageBackground>

      <Text style={styles.price}>{price}</Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.offer}>{offer}</Text>
        <Text style={styles.shortDetail}>{shortDetail}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default WishlistItem
