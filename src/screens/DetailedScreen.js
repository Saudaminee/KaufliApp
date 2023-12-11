import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
} from "react-native";
import { Items, COLOURS } from "../components/database/Database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getImageFromURL, IMAGES } from "../resources/images";
import styles from "../utils/styles/styles";
import { colors } from "../utils/styles/colors";
import { SIZE } from "../utils/constant";
const DetailedScreen = ({ route, navigation }) => {
  const DATA = route.params;
  console.log(DATA, "DATA");
  const text =
    "Purus torquent sagittis platea at ligula iaculis augue nibh dictum. Pellentesque hac mus nisi donec dis neque sodales eros. Platea tempor ultricies. Nostra porttitor nam penatibus integer sociis cras augue nullam inceptos augue vestibulum nam pharetra maecenas dictumst odio rutrum habitant montes sociis velit at interdum litora venenatis orci lacus et. Pellentesque varius interdum Dictumst ut etiam penatibus dictumst. Condimentum phasellus. Sociis nec vivamus nullam tristique netus duis taciti semper ornare pede turpis mattis morbi vestibulum mauris sodales tortor fringilla egestas, in erat.";
  var maxLines = 1;
  const [isLiked, setIsLiked] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [isSizeSelected, setisSizeSekected] = useState(false);
  const handlePress = () => {
    setIsLiked(!isLiked);
  };
  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem("cartItems");
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);

      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("HomeScreen");
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem("cartItems", JSON.stringify(array));
        ToastAndroid.show(
          "Item Added Successfully to cart",
          ToastAndroid.SHORT
        );
        navigation.navigate("HomeScreen");
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
        position: "relative",
        flex: 1,
      }}
    >
      {/* Status bar */}
      <StatusBar
        backgroundColor={COLOURS.backgroundLight}
        barStyle="dark-content"
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* product image */}
        <View
          style={{
            width: "100%",
            backgroundColor: COLOURS.backgroundLight,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 16,
              paddingLeft: 16,
            }}
          >
            <TouchableOpacity
              ///  style={styles.backbtnView}
              style={{
                padding: 10,
                backgroundColor: COLOURS.white,
                borderRadius: 10,
              }}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require("../assets/arrow.png")}
                //  style={styles.backicon}
                style={{ width: 15, height: 15 }}
                resizeMode={"center"}
              />
            </TouchableOpacity>
          </View>
          {/* Image View */}
          <View
            style={{
              width: width,
              height: 240,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={DATA.image}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
            />
          </View>
          {/* <Image source={DATA.image} /> */}
        </View>
        {/* Product In formation VIew */}
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          {/* Product Name and desciption View */}
          <View
            style={{
              marginVertical: 4,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "600",
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: "84%",
              }}
            >
              {DATA.name}
            </Text>
            {/* description text */}
            <Text
              style={{
                fontSize: 15,
                color: COLOURS.black,
                letterSpacing: 1,
                opacity: 0.5,
                maxWidth: "84%",
                maxHeight: 44,
                marginBottom: 4,
              }}
            >
              {DATA.shortDetail}
            </Text>
          </View>
          {/* long desc */}
          <View style={{ maxWidth: "100%" }}>
            <Text
              numberOfLines={showFullText ? undefined : maxLines}
              style={{ letterSpacing: 0.5 }}
            >
              {text}
            </Text>
            {text.length > maxLines * 20 && ( // Assuming 20 characters per line as an estimate
              <TouchableOpacity onPress={toggleReadMore}>
                <Text style={{ color: "#03A685" }}>
                  {showFullText ? "Read less" : "Read more"}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* MRP view  */}
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text
              style={{
                fontSize: 15,
                maxWidth: "85%",
                color: colors.GRAY,
                marginBottom: 4,
              }}
            >
              MRP
            </Text>
            <Text
              style={{
                fontSize: 15,
                maxWidth: "85%",
                color: "#000",
              }}
            >
              {" "}
              &#8377; {DATA.price}.00
            </Text>
          </View>
          {/* Product Size name and list View */}
          <View style={{ marginTop: 8 }}>
            <Text
              style={{
                fontSize: 17,
                color: colors.DARK_BLACK,
                fontWeight: "500",
              }}
            >
              Select Size
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {SIZE.map((size) => (
              
                <View style={{marginVertical:10}}>
      {/* <Image source={image} style={styles.categoryStyle} /> */}
      <TouchableOpacity style={{
        width: 50,
    height: 50,
    backgroundColor: colors.GRAYS_WHITE,
    borderColor: colors.GRAYS_WHITE,
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 16,
    justifyContent:'center',
    alignItems:'center'}}
    onPress={()=> console.log(size.id)}>
        <Text
          style={{ textAlign: "center", fontSize: 11, color: colors.BLACK }}
        >
          {size.title}
        </Text>
      </TouchableOpacity>
    </View>
              ))}
            </ScrollView>
          </View>

          {/* WishList Add toCart Button View */}
          <View
            style={{
              flexDirection: "row",
              marginVertical: 4,
              justifyContent: "space-between",
              borderBottomColor: COLOURS.backgroundLight,
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                borderWidth: 0.5,
                borderRadius: 2,
                width: "45%",
                height: "100%",
                flexDirection: "row",
                padding: 10,
                justifyContent: "center",
                borderColor: "#e3e3e3",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={handlePress}>
                <Image
                  source={
                    isLiked
                      ? getImageFromURL(IMAGES.LIKE)
                      : getImageFromURL(IMAGES.UNLIKE)
                  }
                  style={{ height: 15, width: 15, resizeMode: "contain" }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: "#000",
                  fontWeight: "500",
                  marginStart: 10,
                  fontSize: 12,
                }}
              >
                {" "}
                wishlist
              </Text>
            </View>

            <View
              style={{
                borderWidth: 1,
                borderRadius: 2,
                width: "45%",
                height: "100%",
                backgroundColor: colors.BLACK,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  source={getImageFromURL(IMAGES.CARTBAG)}
                  style={{
                    height: 18,
                    width: 18,
                    resizeMode: "contain",
                    tintColor: "#fff",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: "#fff",
                  fontWeight: "500",
                  marginStart: 10,
                  fontSize: 12,
                }}
              >
                {" "}
                Add to cart
              </Text>
            </View>
          </View>

          {/* Address view */}
          <View>
            <Text
              style={{
                fontSize: 17,
                color: colors.DARK_BLACK,
                fontWeight: "500",
                marginVertical: 4,
              }}
            >
              Delivery & Services for
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                borderColor: "#e3e3e3",
                borderWidth: 0.5,
                borderRadius: 2,
                justifyContent: "space-between",
                marginTop: 10,
                padding: 10,
              }}
            >
              <Text
                style={{
                  textTransform: "capitalize",
                  color: "#000",
                  fontWeight: "500",
                  marginStart: 10,
                  fontSize: 12,
                }}
              >
                201204 (neha)
              </Text>
              <Text
                style={{
                  textTransform: "capitalize",
                  color: colors.DARK_GREY,
                  marginEnd: 10,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Change
              </Text>
            </View>
          </View>

          {/* Review View */}
          <View style={{ marginVertical: 4 }}>
            <Text
              style={{
                fontSize: 17,
                color: colors.DARK_BLACK,
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              rating & review
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#03A685",
                textTransform: "capitalize",
                marginVertical: 4,
              }}
            >
              By verified buyers only
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 24, color: "#000", marginVertical: 5 }}>
                4.2
              </Text>
              <Image
                source={getImageFromURL(IMAGES.RATESTAR)}
                style={{
                  height: 15,
                  width: 15,
                  resizeMode: "contain",
                  left: 5,
                  top: 5,
                  tintColor: "#03A685",
                }}
              />
            </View>

            <Text
              style={{
                fontSize: 12,
                color: "grey",
                fontWeight: "500",
                textTransform: "capitalize",
              }}
            >
              17 Verified buyers
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default DetailedScreen;
