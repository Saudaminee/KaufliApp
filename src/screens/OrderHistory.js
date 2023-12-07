import { Text, View, SafeAreaView, StatusBar, FlatList,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import CommonHeaders from '../components/commons/CommonHeaders'
import OrderHistoryItem from '../components/commons/OrderHistoryItem';
import { IMAGES, getImageFromURL } from "../resources/images";
import styles from '../utils/styles/styles';
import { colors } from '../utils/styles/colors';

const OrderHistory = () => {

    const orders = [
        {
            id: 1,
            orderId: "FN3815309243",
            date: "03 Nov",
            rating:0,
            image: getImageFromURL(IMAGES.CLOTH_DUMMY),
            name: "4WRD by Dressberry",
            price: 500,
            shortDetail: "Men Blue-Coloured Solid Tailored Jacket",
            offer: "20% off",
            discount: 20,
        },
        {
            id: 2,
            orderId: "FN3815309243",
            date: "03 Nov",
            rating:5,
            image: getImageFromURL(IMAGES.SHOO),
            name: "4WRD by Dressberry",
            price: 500,
            shortDetail: "Short detail 2",
            offer: "10% off",
            discount: 10,
        },
        {
            id: 3,
            orderId: "FN3815309243",
            date: "03 Nov",
            rating:4,
            image: getImageFromURL(IMAGES.CLOTH_DUMMY),
            name: "MI Super Bass Bluetooth Wireless Headphones",
            price: 500,
            shortDetail: "Short detail 1",
            offer: "20% off",
            discount: 20,
        },
        {
            id: 4,
            orderId: "FN3815309243",
            date: "03 Nov",
            rating:0,
            image: getImageFromURL(IMAGES.SHOO),
            name: "MI Super Bass Bluetooth Wireless Headphones",
            price: 300,
            shortDetail: "Short detail 2",
            offer: "10% off",
            discount: 10,
        },
        // Add more products as needed
    ];

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <CommonHeaders title="My order history" />

            <View style={{ marginTop: '3%', backgroundColor: colors.GRAYS_WHITE, borderTopLeftRadius: 15, borderTopRightRadius: 15, padding: '2%' }} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '2%', paddingVertical: '3%' }}>
                <Text style={styles.filterText}>Orders of last 6 month </Text>
                <TouchableOpacity style={styles.filerStyle}>
                    <Image style={styles.filterIconStyle} source={getImageFromURL(IMAGES.FILTER_ICON)}></Image>
                    <Text style={styles.textStyle}>Filter</Text>
                </TouchableOpacity>
            </View>
               <View style={{paddingBottom:'65%'}} >
               <FlatList
                    data={orders}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <OrderHistoryItem
                            id={item.id}
                            ratingStar={item.rating}
                            orderId={item.orderId}
                            name={item.image}
                            image={item.date}
                        />
                    )}
                />
               </View>
              
            </View>
        </SafeAreaView>
    )
}

export default OrderHistory
