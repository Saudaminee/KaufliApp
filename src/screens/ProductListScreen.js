import { StyleSheet, Text, View, SafeAreaView, StatusBar, FlatList } from 'react-native'
import React, { useState } from 'react'
import CategoryHeader from '../components/commons/CategoryHeader'
import { IMAGES, getImageFromURL } from "../resources/images";
import ProductItem from '../components/commons/ProductItem';

const ProductListScreen = ({ route }) => {
    const data = route.params;
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
    
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <CategoryHeader title={data.title} />

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
        </SafeAreaView>
    )
}

export default ProductListScreen

const styles = StyleSheet.create({})