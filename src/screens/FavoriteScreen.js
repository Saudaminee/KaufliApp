import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from "react-native";
import Header from "../components/commons/Header";
import styles from "../utils/styles/styles";
import { IMAGES, getImageFromURL } from "../resources/images";
import { colors } from "../utils/styles/colors";
import WishlistItem from "../components/commons/WishlistItem";
import { COLOURS } from "../components/database/Database";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const FavoriteScreen = ({ navigation }) => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: getImageFromURL(IMAGES.CLOTH_DUMMY),
      name: "4WRD by Dressberry",
      price: 500,
      shortDetail: "Men Blue-Coloured Solid Tailored Jacket",
      offer: "20% off",
      discount: 20,
    },
    {
      id: 2,
      image: getImageFromURL(IMAGES.SHOO),
      name: "4WRD by Dressberry",
      price: 500,

      name: "MI Super Bass Bluetooth Wireless Headphones",
      price: "$30",
      shortDetail: "Short detail 2",
      offer: "10% off",
      discount: 10,
    },
    {
      id: 3,
      image: getImageFromURL(IMAGES.CLOTH_DUMMY),
      name: "MI Super Bass Bluetooth Wireless Headphones",
      price: 500,
      shortDetail: "Short detail 1",
      offer: "20% off",
      discount: 20,
    },
    {
      id: 4,
      image: getImageFromURL(IMAGES.SHOO),
      name: "MI Super Bass Bluetooth Wireless Headphones",
      price: 300,
      shortDetail: "Short detail 2",
      offer: "10% off",
      discount: 10,
    },
    // Add more wishlist items as needed
  ]);

  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlist);
  };

  const renderWishlistItem = ({ item }) => {
    console.log("item", JSON.stringify(item));
    return (
      <TouchableOpacity
        style={styles.wish_container}
        onPress={() =>
          navigation.navigate("DetailedScreen", {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            shortDetail: item.shortDetail,
            offer: item.offer,
            discount: item.discount,
          })
        }
      >
        <ImageBackground
          resizeMode={"cover"}
          source={item.image}
          style={styles.image}
        >
          <TouchableOpacity
            style={styles.remove}
            onPress={() => removeFromWishlist(item.id)}
          >
            <Image
              source={getImageFromURL(IMAGES.LIKE)}
              style={{ height: 15, width: 15, tintColor: "red" }}
            />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={{ fontSize: 15, marginStart: 4 }}>{item.name}</Text>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 13, marginStart: 4, color: "#000" }}>
            {item.price}
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginStart: 4,
              color: "red",
              marginVertical: 4,
            }}
          >
            {" "}
            ({item.offer} OFF)
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 15, color: "#000", marginStart: 4 }}>
              4.2
            </Text>
            <Image
              source={getImageFromURL(IMAGES.RATESTAR)}
              style={{
                height: 14,
                width: 14,
                resizeMode: "contain",
                left: 4,
                top: 3,
                tintColor: "#03A685",
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 13,
              marginStart: 5,
              color: "grey",
              marginTop: 5,
            }}
          >
            {" "}
            (112)
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <Header title="My Wishlists" items={wishlistItems.length + " items"} />
      <View
        style={{
          marginTop: "3%",
          backgroundColor: colors.WHITE,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          padding: "2%",
          height: "100%",
        }}
      >
        <FlatList
          data={wishlistItems}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderWishlistItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
