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

      name: "Men Shoe",
      price: "300",
      shortDetail: "Short detail 2",
      offer: "10% off",
      discount: 10,
    },
    {
      id: 3,
      image: getImageFromURL(IMAGES.CLOTH_DUMMY),
      name: "4WRD by Dressberry",
      price: 500,
      shortDetail: "Short detail 1",
      offer: "20% off",
      discount: 20,
    },
    {
      id: 4,
      image: getImageFromURL(IMAGES.SHOO),
      name: "Men Shoe",
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
        style={{
          alignItems: "center",
          backgroundColor: colors.GRAYS_WHITE,
          alignContent: "center",
          alignSelf: "center",
          marginHorizontal: 14,
          marginVertical: 10,
          padding: 10,
          borderRadius: 8,
          justifyContent:'center'
        }}
        onPress={()=>{
          navigation.navigate("DetailedScreen",{
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            shortDetail: item.shortDetail,
            offer: item.offer,
            discount: item.discount,
          })
        }}
      >
        <View>
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
        </View>
        <View>
          <Text>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 4,
            }}
          >
            <Text>
              {"\u20B9"} {item.price}
            </Text>
            <Text style={{ color: "red" }}> {item.offer}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text style={{ color: "#000" }}>4.2</Text>
            <Image
              source={getImageFromURL(IMAGES.RATESTAR)}
              style={{
                height: 14,
                width: 14,
                resizeMode: "contain",
                left: 4,
                tintColor: "#03A685",
              }}
            />
            <Text
              style={{
                marginStart: 5,
                color: "grey",
              }}
            >
              {" "}
              (112)
            </Text>
          </View>
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
