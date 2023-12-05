// DiscountCard.js
import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { IMAGES, getImageFromURL } from "../resources/images"

const DiscountCard = () => {
    return (
        <View style={styles.container} >
          
            <View style={styles.card}>
                <Text style={styles.description}>Delivery is 50% Cheaper</Text>
                
            </View>
            <Image source={getImageFromURL(IMAGES.DISCOUNT_ICON)}  style={styles.icon} />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginHorizontal:'5%'
      },
    card: {
        backgroundColor: '#4CAF50', // Green background color
        padding: 10,
        borderRadius: 8,
        // margin: 16,
        width: 400, 
        // flexDirection: 'row',
        zIndex: 1,
    },
    title: {
        color: '#fff', // White text color
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        color: '#fff',
        fontSize: 16,
        marginTop: 8,
    },
    details: {
        color: '#fff',
        fontSize: 14,
        marginTop: 8,
    },
    icon:{
        width: 85,
        height: 100,
        marginLeft: -100, // Adjust the position to make it look 3D
        marginTop: -25, // Adjust the position to make it look 3D
        position: 'relative',
        zIndex: 2,

    }
});

export default DiscountCard;
