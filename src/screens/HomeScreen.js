import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "../utils/styles/styles";
import { colors } from "../utils/styles/colors";
import HomeHeader from "../components/commons/HomeHeader";
import { IMAGES, getImageFromURL } from "../resources/images";
import CategoryItem from "../components/commons/CategoryItem";
import ProductItem from "../components/commons/ProductItem";
import BrandsItem from "../components/commons/BrandsItem";
import { useNavigation } from "@react-navigation/native";
import { ImageSlider } from "react-native-image-slider-banner";
// import { imagesForSlider } from "../utils/constant";

const HomeScreen = () => {
  const navigation = useNavigation();
   const imagesSlider = [
    {
      id: 1,
      img: require('../assets/slider1.png'),
    },
    {
      id: 2,
      img: require('../assets/slider2.png')
    },
    {
      id: 3,
      img: require('../assets/slider3.png')
    }
  ]
  const categories = [
    { id: 1, image: getImageFromURL(IMAGES.MEN), title: "Man" },
    { id: 2, image: getImageFromURL(IMAGES.WOMEN), title: "Women" },
    { id: 3, image: getImageFromURL(IMAGES.UNISEX), title: "Unisex" },
    { id: 4, image: getImageFromURL(IMAGES.BLUESTONE), title: "New Arrivals" },
    { id: 5, image: getImageFromURL(IMAGES.BAGSCAT), title: "Bags" },
    { id: 6, image: getImageFromURL(IMAGES.SHOOCAT), title: "Shoes" },
    { id: 7, image: getImageFromURL(IMAGES.BEAUTY), title: "Beauty\nproducts" },
  ];
  const brands = [
    { id: 1, image: getImageFromURL(IMAGES.BLUESTONE), title: "Blundstone" },
    { id: 2, image: getImageFromURL(IMAGES.HUGO), title: "Hugo Boss" },
    { id: 3, image: getImageFromURL(IMAGES.BOTEGA), title: "Bottega Veneta" },
    { id: 4, image: getImageFromURL(IMAGES.CK), title: "Calvin Klein" },
    { id: 5, image: getImageFromURL(IMAGES.CARRR), title: "Carrera" },
    { id: 6, image: getImageFromURL(IMAGES.BOTEGA), title: "Guess" },
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
  const imagesForSlider = [
    {
      id: 1,
      img: require('../assets/slider1.png'),
    },
    {
      id: 2,
      img: require('../assets/slider2.png')
    },
    {
      id: 3,
      img: require('../assets/slider3.png')
    }
  ]

  // get random color function useed in brand bg
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
      {/* Status bar */}
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* header view */}
      <HomeHeader location={"Noida"} navigation={navigation} />
      {/* Whole content */}
      <ScrollView>
        <View style={styles.scrollStyle}>
          {/* Images slider view  */}
          <View style={styles.slideImageView}>
            <ImageSlider
              data={imagesSlider}
              autoPlay={true}
              localImg={true}
              showIndicator={true}
              closeIconColor="#fff"
              resizeMode={"cover"}
              indicatorContainerStyle={{
                top: "20%",
              }}
              inActiveIndicatorStyle={{
                height: 2,
                width: 20,
                backgroundColor: colors.GRAYS_WHITE,
              }}
              activeIndicatorStyle={{
                backgroundColor: colors.WHITE,
                height: 2,
                width: 10,
              }}
              caroselImageStyle={{ resizeMode: "cover" }}
            />
          </View>

          <View style={styles.content}>
            {/* Your app components */}
            {/* categories view */}
            <View>
              <View style={styles.catView}>
                {/* <Text
                  style={{
                    fontSize: 17,
                    color: colors.DARK_BLACK,
                    fontWeight: "800"
                  }}></Text> */}
                <TouchableOpacity
                  style={{ padding: 5, flexDirection: "row" }}
                  onPress={() => navigation.navigate("CategoriesScreen", {
                      data: categories }) }>
                  <Text style={styles.seeAllText}>See all</Text>
                  <View style={styles.seeAll}>
                    <Image
                      source={getImageFromURL(IMAGES.NEXT_ICON)}
                      style={styles.seeAllicon}/>
                  </View>
                </TouchableOpacity>
              </View>

              <ScrollView
               showsHorizontalScrollIndicator={false}
                horizontal>
                {categories.map((category) => (
                  <CategoryItem
                    key={category.id}
                    image={category.image}
                    title={category.title}/>
                ))}
              </ScrollView>
            </View>
            {/* Brand View */}
            <View style={styles.brandViewStyle}>
              <View style={styles.branssubViewStyle}>
                <Text style={styles.brandTextStyle}> {"{Brands}"}</Text>
                <TouchableOpacity
                  style={styles.seeAllTouch}
                  onPress={() =>
                    navigation.navigate("BrandsScreen", { data: brands })
                  }>
                  <Text style={styles.seeAllText}> See all </Text>
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

            {/* Flash Sale View */}
            <View style={styles.flashSaleView}>
              <Text style={styles.brandTextStyle}> {"{Flash sale}"}</Text>
              <TouchableOpacity
                style={{ padding: 5, flexDirection: "row" }}
                onPress={() => navigation.navigate("SaleScreen")}>
                <Text style={styles.seeAllText}>See all</Text>
                <View style={styles.seeAll}>
                  <Image
                    source={getImageFromURL(IMAGES.NEXT_ICON)}
                    style={styles.seeAllicon}
                  />
                </View>
              </TouchableOpacity>
            </View>

            {/* product list here! */}
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
              )} />

            {/* bottom designs  */}
            <View style={styles.jacketMainView}>
              <Image
                source={require("../assets/jacket.png")}
                style={styles.jacketImageStyle}
              />
              <View style={styles.jacketTextView}>
                <Text style={styles.jacketMainText}>
                  winter jacket and coats{" "}
                </Text>
                <Text style={styles.jacketSubText}>
                  {" "}
                  Elegant, sporty or casual, choose your style 🧥
                </Text>
                <View style={styles.viewAllView}>
                  <Text style={styles.viewAllText}>View All</Text>
                </View>
              </View>
            </View>
            <Text style={styles.jacketTextStyle}> {"{ Jacket }"}</Text>

            <View>
              <ImageBackground
                resizeMode={"cover"}
                source={require("../assets/tshirt.jpg")}
                style={styles.tshirtImageStyle}>
                <Text style={styles.tshirtMainText}>
                  {" "}
                  T-shirts that can't miss in your wardrobe
                </Text>
                <Text style={styles.tshirtSubText}>
                  {" "}
                  So many designs for your unique style 👕
                </Text>
                <View style={styles.tshirtViewAllStyle}>
                  <Text style={styles.tshirtViewAllText}>View All</Text>
                </View>
              </ImageBackground>
            </View>
            <Text style={styles.jacketTextStyle}> {"{ t-shirt }"}</Text>

            <View
              style={{
                backgroundColor: "#E3CAD2",
                width: "90%",
                height: 150,
                flexDirection: "row",
                alignSelf: "center"}} >
              <Image
                source={require("../assets/shoes.jpg")}
                style={styles.feetImagestyle}
              />
              <View style={styles.feetMainView}>
                <Text style={styles.jacketMainText}>Style on your feet</Text>
                <Text style={styles.jacketSubText}>
                  {" "}
                  Find the perfect sneakers for you 👟
                </Text>
                <View style={styles.feetViewAllButton}>
                  <Text style={styles.tshirtViewAllText}>View All</Text>
                </View>
              </View>
            </View>
            <Text style={styles.jacketTextStyle}> {"{ feet look }"}</Text>

            <View style={styles.beautyMainView}>
              <Image
                source={require("../assets/beautyProduct.jpeg")}
                style={styles.beautyImageStyle} />

              <View style={styles.beautySubView}>
                <Text style={styles.beautyMainText}>Handmade cosmetics</Text>
                <Text style={styles.beautySubText}>
                  We have selected only the best products from top manufacturers
                </Text>
                <View style={styles.viewAllView}>
                  <Text style={styles.viewAllText}>View All</Text>
                </View>
              </View>
            </View>
            <Text style={styles.jacketTextStyle}>
              {" "}
              {"{ handmase cosmetics }"}
            </Text>

            <View style={styles.BagMainView}>
              <View style={styles.bagSubView}>
                <Text style={styles.bagMainText}>
                  Designer Handbags for Every Occasion
                </Text>
                <Text style={styles.beautySubText}>
                  Designer Handbags for Every Occasion
                </Text>
                <View style={styles.viewAllView}>
                  <Text style={styles.viewAllText}>View All</Text>
                </View>
              </View>
              <Image
                source={require("../assets/handbegs.png")}
                style={styles.BagImageStyle}
              />
            </View>

            <Text style={styles.jacketTextStyle}> {"{ handbags }"}</Text>

            {/* #244F32 */}
            <View style={styles.earingMainView}>
              <View style={styles.bagSubView}>
                <Text style={styles.earingTextView}>Luxury corner</Text>
                <Text style={styles.earingSubTextView}>
                  Shine with our exclusive brands ⭐
                </Text>
                <View style={styles.earingSellView}>
                  <Text style={styles.viewAllText}>View All</Text>
                </View>
              </View>
              <Image
                source={require("../assets/earing.jpeg")}
                style={styles.earingImageView}
              />
            </View>
            <Text style={styles.jacketTextStyle}> {"{ LUXURY }"}</Text>

            <View>
              <ImageBackground
                resizeMode={"cover"}
                source={require("../assets/allsales.png")}
                style={styles.salesImageStyle}
              >
                <Text style={styles.salesMainText}>All out end of season</Text>
                <Text style={styles.salesSubText}>
                  Lots of products at incredible prices 😎
                </Text>
                <View style={styles.salesViewAllView}>
                  <Text style={styles.salesViewAll}> View All</Text>
                </View>
              </ImageBackground>
            </View>
            <Text style={styles.jacketTextStyle}> {"{ ALL SESON }"}</Text>

            <View>
              <ImageBackground
                resizeMode={"cover"}
                source={require("../assets/sports.jpg")}
                style={styles.salesImageStyle}
              >
                <Text style={styles.salesMainText}>Sport collection</Text>
                <Text style={styles.salesSubText}>
                  Limited edition sports collection made from recycled plastic
                  bottles
                </Text>
                <View style={styles.salesViewAllView}>
                  <Text style={styles.salesViewAllText}> View All</Text>
                </View>
              </ImageBackground>
            </View>
            <Text style={styles.jacketTextStyle}>
              {" "}
              {"{  SPORT COLLETION }"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
