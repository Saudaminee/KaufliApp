import { Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import styles from '../utils/styles/styles'
import { colors } from '../utils/styles/colors'
import HomeHeader from '../utils/HomeHeader'
import Search from '../utils/Search'
import { IMAGES, getImageFromURL } from "../resources/images"
import DiscountCard from '../utils/DiscountCard'
import CategoryItem from '../utils/CategoryItem'
import ProductItem from '../utils/ProductItem'

const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: 1, title: 'Man' },
    { id: 2, title: 'Women' },
    { id: 3, title: 'Unisex' },
    { id: 4, title: 'New Arrivals' },
    { id: 5, title: 'Brand' },
    { id: 6, title: 'Bags' },
    { id: 7, title: 'Shoes' },
    { id: 8, title: 'Beauty products' }
  ];

  const products = [
    { id: 1, image: getImageFromURL(IMAGES.CLOTH_DUMMY), price: '$50', shortDetail: 'Short detail 1', offer: '20% off' },
    { id: 2, image: getImageFromURL(IMAGES.SHOO), price: '$30', shortDetail: 'Short detail 2', offer: '10% off' },
    { id: 3, image: getImageFromURL(IMAGES.CLOTH_DUMMY), price: '$50', shortDetail: 'Short detail 1', offer: '20% off' },
    { id: 4, image: getImageFromURL(IMAGES.SHOO), price: '$30', shortDetail: 'Short detail 2', offer: '10% off' },
    // Add more products as needed
  ];

  const handleSearch = (searchText) => {
    // Handle the search action (e.g., filter data based on searchText)
    console.log('Searching for:', searchText);
  };

  return (
    <SafeAreaView style={styles.containerApp}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <HomeHeader location={'Noida'} navigation={navigation} />
      <Search onSearch={handleSearch} />
      {/* <DiscountCard /> */}
      <View style={styles.content}>
        {/* Your app components */}
        <View >
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 17, color: colors.DARK_BLACK, fontWeight: '800' }}> Categories</Text>
            <TouchableOpacity style={{ padding: 5, flexDirection: 'row' }} onPress={() => navigation.navigate('Notifications')}>
              <Text style={{ fontSize: 12, color: colors.DARK_BLACK, marginRight: 5, alignSelf: 'center' }}> See all</Text>
              <View style={styles.seeAll} >
                <Image source={getImageFromURL(IMAGES.NEXT_ICON)} style={styles.seeAllicon} />
              </View>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal >
            {categories.map((category) => (
              <CategoryItem key={category.id} title={category.title} />
            ))}
            {/* image={category.image} */}
          </ScrollView>
        </View>


        <View style={{paddingBottom:'32%',marginTop:'2%'}}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ fontSize: 17, color: colors.DARK_BLACK, fontWeight: '800' }}> Flash sale</Text>
            <TouchableOpacity style={{ padding: 5, flexDirection: 'row' }} onPress={() => navigation.navigate('Notifications')}>
              <Text style={{ fontSize: 12, color: colors.DARK_BLACK, marginRight: 5, alignSelf: 'center' }}> See all</Text>
              <View style={styles.seeAll} >
                <Image source={getImageFromURL(IMAGES.NEXT_ICON)} style={styles.seeAllicon} />
              </View>
            </TouchableOpacity>
          </View>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item }) => (
              <ProductItem
                image={item.image}
                price={item.price}
                shortDetail={item.shortDetail}
                offer={item.offer}
              />
            )} />
        </View>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
