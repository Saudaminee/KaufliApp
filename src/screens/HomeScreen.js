import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import styles from "../utils/styles/styles";
import { colors } from "../utils/styles/colors";
import HomeHeader from "../components/commons/HomeHeader";
import Search from "../components/commons/Search";
import { IMAGES, getImageFromURL } from "../resources/images";
import DiscountCard from "../components/commons/DiscountCard";
import CategoryItem from "../components/commons/CategoryItem";
import ProductItem from "../components/commons/ProductItem";
import BrandsItem from "../components/commons/BrandsItem";
import { useNavigation } from "@react-navigation/native";
import ImageSliderView from "../components/commons/ImageSliderView";

const HomeScreen = () => {
  const navigation = useNavigation();

  const categories = [
    {
        id: 1,
        image: getImageFromURL(IMAGES.MEN),
        title: "Man",
    },
    {
        id: 2,
        image: getImageFromURL(IMAGES.WOMEN),
        title: "Women",
    },
    {
        id: 3,
        image: getImageFromURL(IMAGES.UNISEX),
        title: "Unisex",
    },
    {
        id: 4,
        image: getImageFromURL(IMAGES.BAGSCAT),
        title: "Bags",
    },
    {
        id: 5,
        image: getImageFromURL(IMAGES.SHOOCAT),
        title: "Shoes",
    },
    {
        id: 6,
        image: getImageFromURL(IMAGES.ACCESSORIES),
        title: "Accessories",
    },{
        id: 7,
        image: getImageFromURL(IMAGES.BEAUTY),
        title: "Beauty\nProducts",
    },
    // Add more products as needed
];

  const brands = [
    { id: 1, image: getImageFromURL(IMAGES.MEN), title: "Blundstone" },
    { id: 2, image: getImageFromURL(IMAGES.WOMEN), title: "Hugo Boss" },
    { id: 3,  image: getImageFromURL(IMAGES.BAGSCAT),title: "Bottega Veneta" },
    { id: 4,image: getImageFromURL(IMAGES.SHOOCAT), title: "Calvin Klein" },
    { id: 5, image: getImageFromURL(IMAGES.UNISEX), title: "Carrera" }
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

  

  return (
    <SafeAreaView style={styles.containerApp}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HomeHeader location={"Noida"} navigation={navigation} />
      {/* <Search onSearch={handleSearch} /> */}
      {/* <DiscountCard /> */}
      {/* <ImageSliderView></ImageSliderView> */}
      <ScrollView style={{marginTop:'3%'}}> 
      <View style={styles.content}>
        {/* Your app components */}
        <View>
          <View  style={{ justifyContent: "space-between", flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 17,
                color: colors.DARK_BLACK,
                fontWeight: "800",
              }}>
              
            </Text>
            <TouchableOpacity
              style={{ padding: 5, flexDirection: "row" }}
              onPress={() => navigation.navigate("CategoriesScreen",{data:categories})}
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
              <CategoryItem key={category.id} title={category.title} image={category.image} />
            ))}
          </ScrollView>
        </View>

        <View style={{marginTop:15}}>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginVertical: "1%" }}>
            <Text
              style={{
                fontSize: 17,
                color: colors.DARK_BLACK,
                fontWeight: "800" }} >{"{"+"Brands"+"}"}</Text>
            <TouchableOpacity
              style={{ padding: 5, flexDirection: "row" }}
              onPress={() => navigation.navigate("BrandsScreen",{data: brands})}>
              <Text
                style={{
                  fontSize: 12,
                  color: colors.DARK_BLACK,
                  marginRight: 5,
                  alignSelf: "center" }} > See all </Text>
              <View style={styles.seeAll}>
                <Image
                  source={getImageFromURL(IMAGES.NEXT_ICON)}
                  style={styles.seeAllicon}/>
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
          style={{ paddingBottom: "32%", marginTop: "2%", marginBottom: "34%" }} >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }} >
            <Text
              style={{
                fontSize: 17,
                color: colors.DARK_BLACK,
                fontWeight: "800",
              }} >
            {"{"+"Flash Sale"+"}"}
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
      </View>
      </ScrollView>
     
    </SafeAreaView>
  );
};

export default HomeScreen;
