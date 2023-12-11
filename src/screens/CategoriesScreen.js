import { Text, View, SafeAreaView, StatusBar, FlatList, Image } from 'react-native'
import React from 'react'
import CommonHeaders from '../components/commons/CommonHeaders'
import { useNavigation } from "@react-navigation/native";
import AllCategories from '../components/commons/AllCategories';
import { IMAGES, getImageFromURL } from "../resources/images";
import { colors } from '../utils/styles/colors';

const CategoriesScreen = () => {
    const navigation = useNavigation();
    const category = [
        {
            id: 1,
            image: getImageFromURL(IMAGES.MEN),
            name: "Men",
        },
        {
            id: 2,
            image: getImageFromURL(IMAGES.WOMEN),
            name: "Women",
        },
        {
            id: 3,
            image: getImageFromURL(IMAGES.BAGSCAT),
            name: "Bags",
        },
        {
            id: 4,
            image: getImageFromURL(IMAGES.BEAUTY),
            name: "Beauty\nProducts",
        },
        {
            id: 5,
            image: getImageFromURL(IMAGES.UNISEX),
            name: "Unisex",
        },
        {
            id: 6,
            image: getImageFromURL(IMAGES.ACCESSORIES),
            name: "Accessories",
        },{
            id: 7,
            image: getImageFromURL(IMAGES.SHOOCAT),
            name: "Shoes",
        },
        // Add more products as needed
    ];
    
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <CommonHeaders title="All categories" />
          
          <View style={{marginHorizontal:15,marginTop:'5%'}}>
            <FlatList
                data={category}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <AllCategories
                        id={item.id}
                        name={item.name}
                        image={item.image}/>
                )}
            />
            </View>
        </SafeAreaView>
    )
}

export default CategoriesScreen
