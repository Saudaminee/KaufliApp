import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, SafeAreaView ,ImageBackground} from 'react-native';
import Header from '../components/commons/Header'
import styles from '../utils/styles/styles'
import { IMAGES, getImageFromURL } from "../resources/images";
import { colors } from '../utils/styles/colors';
import WishlistItem from '../components/commons/WishlistItem';

const FavoriteScreen = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: '1', name: 'Product 1', image: getImageFromURL(IMAGES.SHOO), price: "$20", shortDetail: "shortDetailshortDetail" },
    { id: '2', name: 'Product 2', image: getImageFromURL(IMAGES.CLOTH_DUMMY), price: "$30", shortDetail: "shortDetailshortDetail"},
    { id: '3', name: 'Product 3', image: getImageFromURL(IMAGES.SHOO), price: "$20", shortDetail: "shortDetailshortDetail" },
    { id: '4', name: 'Product 4', image: getImageFromURL(IMAGES.CLOTH_DUMMY), price: "$30", shortDetail: "shortDetailshortDetail"},
    // Add more wishlist items as needed
  ]);

  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter(item => item.id !== itemId);
    setWishlistItems(updatedWishlist);
  };

  const renderWishlistItem = ({ item }) => (
    <TouchableOpacity
    style={styles.wish_container}
  >
    <ImageBackground source={item.image} style={styles.image}>
      <TouchableOpacity
        style={styles.remove}
        onPress={() => removeFromWishlist(item.id)}>
        <Image
          source={
              getImageFromURL(IMAGES.REMOVE)
          }
          style={{height:18,width:18,tintColor:colors.DARK_RED}}
        />
      </TouchableOpacity>
    </ImageBackground>

    <Text style={styles.price}>{item.price}</Text>
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {/* <Text style={styles.offer}>{offer}</Text> */}
      <Text style={styles.shortDetail}>{item.shortDetail}</Text>
    </View>
  </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <Header title="My Wishlists" items={wishlistItems.length+" items"} />
      <View style={{ marginTop: '3%', backgroundColor: colors.WHITE, borderTopLeftRadius: 15, borderTopRightRadius: 15, padding: '2%' }} >
         <FlatList
        data={wishlistItems}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderWishlistItem}
        contentContainerStyle={styles.listContainer}
      />
      </View>
    </SafeAreaView>
  )
}

export default FavoriteScreen
