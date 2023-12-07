import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/styles/colors'
import { IMAGES, getImageFromURL } from "../../resources/images";
import { Rating } from 'react-native-ratings';


const OrderHistoryItem = ({ id, ratingStar, orderId, image, date }) => {
    var data = {
        id: id,
        orderId: orderId,
        image: image,
        date: date,
    };

    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }
    //   console.log("CGFHFHGH",rating,orderId)
    return (
        <View style={styles.mainContainer}>
            <Text style={[styles.subtitle, { marginBottom: 5 }]}>{"Order Id : " + data.orderId}</Text>
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <Image style={styles.imageStyle} source={getImageFromURL(IMAGES.CLOTH_DUMMY)} />
                    <View style={{ flexDirection: 'column', justifyContent: 'center', marginStart: '3%' }}>
                        <Text style={styles.title}>Deliverd</Text>
                        <Text style={[styles.subtitle, { marginTop: 5 }]}>Deliverd on 02 Nov{data.date}</Text>
                        {ratingStar <= 0 ? (
                            null
                        ) : <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <Text style={{ fontSize: 9, color: colors.BLACK, fontWeight: '500' }}>You rated</Text>
                            <Image style={{ height: 11, width: 12, marginLeft: '5%', tintColor: colors.SUNFLOWER_YELLOW }} source={getImageFromURL(IMAGES.RATESTAR)}></Image>
                            <Text style={{ fontSize: 9, color: colors.ALMOST_BLACK, marginLeft: 3, alignSelf: 'center' }}>{ratingStar}</Text>
                        </View>
                        }
                    </View>
                    <TouchableOpacity style={{ alignSelf: 'center', right: 8, position: 'absolute' }}>
                        <Image style={{ height: 20, width: 20, resizeMode: 'contain' }} source={getImageFromURL(IMAGES.NEXT_ICON)} />
                    </TouchableOpacity>
                </View>

                {ratingStar <= 0 ? (
                    <View style={{ flexDirection: 'row', marginHorizontal: 5, marginTop: 5, padding: 10 }}>
                        <Text style={[styles.title, { alignSelf: 'center' }]}>Rate this product ?</Text>
                        <Rating
                            // showRating
                            onFinishRating={ratingCompleted}
                            style={{ paddingVertical: 1 }}
                        />
                    </View>
                ) : null}

                <View>

                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.GRAYS_WHITE,
        marginHorizontal: '2%',
        marginVertical: '2%',
        // paddingBottom:'20%'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 8,
        backgroundColor: colors.OFF_WHITE,
        // paddingBottom:'5%'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: colors.WHITE

    },
    imageStyle: {
        height: 100,
        width: 80,
        padding: 5,
        right: 3,
        borderWidth: 1,
        borderColor: colors.GRAYS_WHITE,
        overflow: 'hidden',
        borderRadius: 10

    },
    title: {
        fontSize: 12,
        color: colors.BLACK,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 10,

        color: colors.BLACK_TWO
    },
})

export default OrderHistoryItem

