import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList, ImageBackground
} from "react-native";
import React from "react";
import styles from "../utils/styles/styles";
import { colors } from "../utils/styles/colors";
import HomeHeader from "../components/commons/HomeHeader";
import Search from "../components/commons/Search";
import { IMAGES, getImageFromURL } from "../resources/images";
import CategoryItem from "../components/commons/CategoryItem";
import ProductItem from "../components/commons/ProductItem";
import BrandsItem from "../components/commons/BrandsItem";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const categories = [
    { id: 1, title: "Man" },
    { id: 2, title: "Women" },
    { id: 3, title: "Unisex" },
    { id: 4, title: "New Arrivals" },
    { id: 5, title: "Bags" },
    { id: 6, title: "Shoes" },
    { id: 7, title: "Beauty products" },
  ];

  const brands = [
    { id: 1, title: "Levice" },
    { id: 2, title: "ZARA" },
    { id: 3, title: "Roadster" },
    { id: 4, title: "Woodland" },
    { id: 5, title: "Zivame" },
  ];

  const products = [
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
    {
      id: 5,
      image: getImageFromURL(IMAGES.SHOO),
      name: "MI Super Bass Bluetooth Wireless Headphones",
      price: 300,
      shortDetail: "Short detail 2",
      offer: "10% off",
      discount: 10,
    },
    {
      id: 6,
      image: getImageFromURL(IMAGES.CLOTH_DUMMY),
      name: "4WRD by Dressberry",
      price: 500,
      shortDetail: "Men Blue-Coloured Solid Tailored Jacket",
      offer: "20% off",
      discount: 20,
    },
    // Add more products as needed
  ];

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleSearch = (searchText) => {
    // Handle the search action (e.g., filter data based on searchText)
    console.log("Searching for:", searchText);
  };

  return (
    <SafeAreaView style={styles.containerApp}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HomeHeader location={"Noida"} navigation={navigation} />
      <Search onSearch={handleSearch} />
      {/* <DiscountCard /> */}
      <ScrollView>
        <View style={styles.content}>
          {/* Your app components */}
          <View>
            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 17,
                  color: colors.DARK_BLACK,
                  fontWeight: "800",
                }}>
                Categories
              </Text>
              <TouchableOpacity
                style={{ padding: 5, flexDirection: "row" }}
                onPress={() => navigation.navigate("CategoriesScreen")}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.DARK_BLACK,
                    marginRight: 5,
                    alignSelf: "center",
                  }}>
                  See all
                </Text>
                <View style={styles.seeAll}>
                  <Image
                    source={getImageFromURL(IMAGES.NEXT_ICON)}
                    style={styles.seeAllicon}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {categories.map((category) => (
                <CategoryItem key={category.id} title={category.title} />
              ))}
            </ScrollView>
          </View>

          <View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginVertical: "1%",
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.DARK_BLACK,
                  fontWeight: "500"
                }} > Brands</Text>
              <TouchableOpacity
                style={{ padding: 5, flexDirection: "row" }}
                onPress={() => navigation.navigate("BrandsScreen")}>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.DARK_BLACK,
                    marginRight: 5,
                    alignSelf: "center"
                  }} > See all </Text>
                <View style={styles.seeAll}>
                  <Image
                    source={getImageFromURL(IMAGES.NEXT_ICON)}
                    style={styles.seeAllicon}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {brands.map((brands) => (
                <BrandsItem
                  key={brands.id}
                  title={brands.title}
                  backgroundColor={getRandomColor()}
                />
              ))}
            </ScrollView>
          </View>

          <View
          // style={{ paddingBottom: "32%", marginTop: "2%", marginBottom: "34%" }} 
          >
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }} >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.DARK_BLACK,
                  fontWeight: "500",
                }} >
                Flash sale
              </Text>
              <TouchableOpacity
                style={{ padding: 5, flexDirection: "row" }}
                onPress={() => navigation.navigate("SaleScreen")} >
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.DARK_BLACK,
                    marginRight: 5,
                    alignSelf: "center",
                  }} >
                  See all
                </Text>
                <View style={styles.seeAll}>
                  <Image
                    source={getImageFromURL(IMAGES.NEXT_ICON)}
                    style={styles.seeAllicon}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <FlatList
              data={products}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              renderItem={({ item }) => (
                <ProductItem
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  shortDetail={item.shortDetail}
                  offer={item.offer}
                  id={item.id}
                  discount={item.discount}
                />
              )}
            />
          </View>

          {/* bottom designs  */}
          <View style={{ backgroundColor: '#DACCC4', width: '100%', height: 150, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/jacket.png')}
              style={{ width: 120, height: 120 }}
            />


            <View style={{ alignItems: 'center', marginHorizontal: 10, justifyContent: 'center' }} >
              <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#000', fontSize: 18, }}>winter jacket and coats </Text>
              <Text style={{ fontSize: 10 }}> Elegant, sporty or casual, choose your style 🧥</Text>
              <View
                style={{
                  borderRadius: 2,
                  backgroundColor: colors.BLACK,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60, height: 25,
                  alignContent: 'center', marginTop: 10
                }}
              >

                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: 10,
                    textAlign: 'center'
                  }}
                >
                  {" "}
                  View All
                </Text>


              </View>
            </View>

          </View>


          <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#000', fontSize: 20, maxWidth: '50%', marginVertical: 10 }}> {"{ Jacket }"}</Text>


          <View>
            <ImageBackground
              resizeMode={"cover"}
              source={require('../assets/tshirt.jpg')}
              style={{ height: 120, width: '100%' }}
            >
              <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#fff', fontSize: 18, maxWidth: '95%', marginTop: '10%', marginHorizontal: 10 }}> T-shirts that can't miss in your wardrobe</Text>
              <Text style={{ fontSize: 10, color: '#fff', marginHorizontal: 15 }}> So many designs for your unique style 👕</Text>
              <View
                style={{
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60, height: 25,
                  alignContent: 'center', marginTop: 5,
                  marginHorizontal: 15
                }}
              >

                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: 10,
                    textAlign: 'center'
                  }}
                >
                  {" "}
                  View All
                </Text>


              </View>
            </ImageBackground>
          </View>
          <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#000', fontSize: 20, maxWidth: '50%', marginVertical: 10 }}> {"{ t-shirt }"}</Text>
        </View>


      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;
