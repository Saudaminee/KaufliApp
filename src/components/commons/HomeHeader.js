import { View, TouchableOpacity, Image, StyleSheet,Text } from 'react-native';
import { colors } from '../../utils/styles/colors';
import { IMAGES, getImageFromURL } from "../../resources/images"
import React from 'react'


const HomeHeader = ({location,navigation}) => {
    return (
        <View style={styles.header}>
          <TouchableOpacity style={styles.profileStyle} onPress={() => navigation.navigate('ProfileScreen')}>
            <Image source={getImageFromURL(IMAGES.PROFILE_ICON)}  style={styles.icon} />
          </TouchableOpacity>
          <View  >
          <Text style={styles.titleStyle}>Delivery address</Text>
          <Text style={{fontSize:12,color:colors.BLACK_TWO,fontWeight:'800'}}>Noida sector 122,Greens 2</Text>
          </View>
       
          <TouchableOpacity style={styles.notificationStyle} onPress={() => navigation.navigate('Notifications')}>
            <Image source={getImageFromURL(IMAGES.NOTIFICATION_ICON)} style={styles.icon} />
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        header: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 9,
          backgroundColor: colors.WHITE, // Customize background color
        },
        notificationStyle:{
         width:30,
         height:30,
         backgroundColor:colors.GRAYS_WHITE,
         borderColor:colors.GRAYS_WHITE,
         borderWidth:1,
         borderRadius:40,
         marginRight: 16,
         justifyContent:'center',
         alignItems:'center'
        },
        profileStyle:{
            width:30,
            height:30,
            backgroundColor:colors.GREEN_LIGHT,
            borderColor:colors.GREEN_LIGHT,
            borderWidth:1,
            borderRadius:40,
            marginRight: 16,
            justifyContent:'center',
            alignItems:'center'
           },
        icon: {
          width: 18,
          height: 18
        },
        titleStyle:{color:colors.GRAY,justifyContent:'center',alignSelf:'center',fontSize:10}
      });
  
      export default HomeHeader;