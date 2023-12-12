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
import { IMAGES, getImageFromURL } from "../resources/images";
import CategoryItem from "../components/commons/CategoryItem";
import ProductItem from "../components/commons/ProductItem";
import BrandsItem from "../components/commons/BrandsItem";
import { useNavigation } from "@react-navigation/native";
import { ImageSlider } from "react-native-image-slider-banner";
const imagesSlider = [
  {
    id: 1,
    img: require('../assets/slider1.png'),
  },
  {
    id: 2,
    img: require('../assets/slider2.png')},
  {
    id: 3,
    img: require('../assets/slider3.png') }
]
const HomeScreen = () => {
  const navigation = useNavigation();

  const categories = [
    { id: 1,image: getImageFromURL(IMAGES.MEN), title: "Man" },
    { id: 2,image: getImageFromURL(IMAGES.WOMEN), title: "Women" },
    { id: 3, image: getImageFromURL(IMAGES.UNISEX),title: "Unisex" },
    { id: 4,image: getImageFromURL(IMAGES.BLUESTONE), title: "New Arrivals" },
    { id: 5,image: getImageFromURL(IMAGES.BAGSCAT), title: "Bags" },
    { id: 6,image: getImageFromURL(IMAGES.SHOOCAT), title: "Shoes" },
    { id: 7,image: getImageFromURL(IMAGES.BEAUTY), title: "Beauty\nproducts" },
  ];

  const brands = [
    { id: 1, image: getImageFromURL(IMAGES.BLUESTONE), title: "Blundstone" },
    { id: 2, image: getImageFromURL(IMAGES.HUGO), title: "Hugo Boss" },
    { id: 3,  image: getImageFromURL(IMAGES.BOTEGA),title: "Bottega Veneta" },
    { id: 4,image: getImageFromURL(IMAGES.CK), title: "Calvin Klein" },
    { id: 5, image: getImageFromURL(IMAGES.CARRR), title: "Carrera" },
    { id: 6,  image: getImageFromURL(IMAGES.BOTEGA),title: "Guess" },
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


  return (
    <SafeAreaView style={styles.containerApp}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HomeHeader location={"Noida"} navigation={navigation} />
      {/* <Search onSearch={handleSearch} /> */}
      {/* <DiscountCard /> */}
      <ScrollView>
      <View style={{flexDirection:'column',marginTop:'1%'}}>
      <View style={{ paddingBottom: 5,height:200 }}>
        <ImageSlider
          data={imagesSlider}
          autoPlay={true}
          localImg={true}
          showIndicator={true}
          closeIconColor="#fff"
          resizeMode={'cover'}
          indicatorContainerStyle={{
            top: '20%',
          }}
          inActiveIndicatorStyle={{height:2,width:20,backgroundColor:colors.GRAYS_WHITE}}
          activeIndicatorStyle={{backgroundColor:colors.WHITE,height:2,width:10}}
          caroselImageStyle={{ resizeMode: 'cover', }}
        />
      </View>
      <View style={styles.content}>
          {/* Your app components */}
          <View>
            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 17,
                  color: colors.DARK_BLACK,
                  fontWeight: "800",
                }}></Text>
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
                <CategoryItem key={category.id} image={category.image} title={category.title} />
              ))}
            </ScrollView>
          </View>

          <View style={{marginTop:'3%'}}>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginVertical: "1%",
              }}>
              <Text
                style={{
                  fontSize: 17,
                  color: colors.DARK_BLACK,
                  fontWeight: "500"
                }} > {"{Brands}"}</Text>
              <TouchableOpacity
                style={{ padding: 5, flexDirection: "row" }}
                onPress={() => navigation.navigate("BrandsScreen",{data:brands})}>
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
              style={{ justifyContent: "space-between", flexDirection: "row" ,marginTop:'3%'}} >
              <Text
                style={{
                  fontSize: 17,
                  color: colors.DARK_BLACK,
                  fontWeight: "500",
                }} > {"{Flash sale}"}</Text>
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
                }}>

                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "#fff",
                    fontWeight: "500",
                    fontSize: 10,
                    textAlign: 'center'
                  }}>
                  View All</Text>
              </View>
            </View>

          </View>
          <Text style={{ textTransform: "uppercase", fontWeight: 'bold', color: '#000', fontSize: 17, maxWidth: '50%', marginVertical: 10 }}> {"{ Jacket }"}</Text>
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
          <Text style={{ textTransform: "uppercase", fontWeight: 'bold', color: '#000', fontSize: 17, maxWidth: '50%', marginVertical: 10 }}> {"{ t-shirt }"}</Text>
          <View style={{ backgroundColor: '#E3CAD2', width: '90%', height: 150, flexDirection: 'row', alignSelf: 'center' }}>
            <Image source={require('../assets/shoes.jpg')}
              style={{ width: 150, height: 150 }}
            />


            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
              <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#000', fontSize: 18, }}>Style on your feet</Text>
              <Text style={{ fontSize: 10, color: '#000', marginVertical: 5 }}>      Find the perfect sneakers for you 👟</Text>
              <View
                style={{
                  borderRadius: 2,
                  borderColor: colors.BLACK,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60, height: 25,
                  alignContent: 'center', marginTop: 10,
                  borderWidth: 0.5
                }}
              >

                <Text
                  style={{
                    textTransform: "uppercase",
                    color: colors.BLACK,
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
          <Text style={{ textTransform: "uppercase", fontWeight: 'bold', color: '#000', fontSize: 17, maxWidth: '50%', marginVertical: 10 }}> {"{ feet look }"}</Text>

          <View style={{ backgroundColor: '#E2D3D4', width: '100%', height: 150, flexDirection: 'row', alignSelf: 'center' }}>
            <Image source={require('../assets/beautyProduct.jpeg')}
              style={{ width: 150, height: 150 }}
            />


            <View style={{ justifyContent: 'center', marginHorizontal: 20 }} >
              <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#000', fontSize: 18, }}>Handmade cosmetics</Text>
              <Text style={{ fontSize: 10, color: '#000', marginVertical: 5, maxWidth: '80%' }}>We have selected only the best products from top manufacturers</Text>
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
          <Text style={{ textTransform: "uppercase", fontWeight: 'bold', color: '#000', fontSize: 17, maxWidth: '100%', marginVertical: 10 }}> {"{ handmase cosmetics }"}</Text>
          <View style={{ backgroundColor: '#DACCC4', width: '100%', height: 150, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>



            <View style={{ justifyContent: 'center', }} >
              <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#000', fontSize: 18, maxWidth: '70%' }}>Designer Handbags for Every Occasion</Text>
              <Text style={{ fontSize: 10 }}>Designer Handbags for Every Occasion</Text>
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
            <Image source={require('../assets/handbegs.png')}
              style={{ width: 120, height: 120 }}
            />
          </View>


          <Text style={{ textTransform: "uppercase", fontWeight: 'bold', color: '#000', fontSize: 17, maxWidth: '50%', marginVertical: 10 }}> {"{ handbags }"}</Text>


          {/* #244F32 */}
          <View style={{ backgroundColor: '#244F32', width: '100%', height: 150, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>



            <View style={{ justifyContent: 'center', }} >
              <Text style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#fff', fontSize: 18, }}>Luxury corner</Text>
              <Text style={{ fontSize: 10, color: '#fff' }}>Shine with our exclusive brands ⭐</Text>
              <View
                style={{
                  borderRadius: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60, height: 25,
                  alignContent: 'center', marginTop: 10,
                  borderColor: '#fff',
                  borderWidth: 0.5
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
            <Image source={require('../assets/earing.jpeg')}
              style={{ width: 130, height: 130 }}
            />
          </View>
          <Text style={{ textTransform: "uppercase", fontWeight: 'bold', color: '#000', fontSize: 17, maxWidth: '50%', marginVertical: 10 }}> {"{ LUXURY }"}</Text>



          <View>
            <ImageBackground
              resizeMode={"cover"}
              source={require('../assets/allsales.png')}
              style={{ height: 120, width: '100%' }}
            >
              <Text style={{
                textTransform: 'capitalize',
                fontWeight: 'bold', color: '#fff',
                fontSize: 18,
                maxWidth: '95%',
                marginTop: '8%',
                marginHorizontal: 10,
                textAlign: 'center'
              }}>All out end of season</Text>
              <Text style={{ fontSize: 10, color: '#fff', textAlign: 'center', marginVertical: 5 }}>Lots of products at incredible prices 😎</Text>
              <View
                style={{
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60, height: 25,
                  alignContent: 'center',
                  marginHorizontal: 15,
                  alignItems: 'center', alignSelf: 'center'
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
          <Text style={{ textTransform: "uppercase", fontWeight: 'bold', color: '#000', fontSize: 17, maxWidth: '50%', marginVertical: 10 }}> {"{ ALL SESON }"}</Text>


          <View>
            <ImageBackground
              resizeMode={"cover"}
              source={require('../assets/sports.jpg')}
              style={{ height: 120, width: '100%' }}
            >
              <Text style={{
                textTransform: 'capitalize',
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 18, maxWidth: '95%',
                marginTop: '8%',
                marginHorizontal: 10
              }}>
                Sport collection</Text>
              <Text style={{ fontSize: 10, color: '#fff', marginHorizontal: 10, marginVertical: 5 }}>Limited edition sports collection made from recycled plastic bottles</Text>
              <View
                style={{
                  borderRadius: 2,
                  backgroundColor: '#fff',
                  justifyContent: "center",
                  alignItems: "center",
                  width: 60,
                  height: 25,
                  alignContent: 'center',
                  marginHorizontal: 10

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
          <Text style={{ textTransform: "uppercase", fontWeight: 'bold', color: '#000', fontSize: 17, maxWidth: '100%', marginVertical: 10 }}> {"{  SPORT COLLETION }"}</Text>
        </View>
      </View>
       


      </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;
