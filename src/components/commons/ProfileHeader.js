import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/styles/colors';

const ProfileHeader = ({ name}) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <View >

    </View>
    {/* <Text style={styles.subtitle}>{items}</Text> */}
    {/* Add more header content or customization as needed */}
  </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({ 
    container: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderBottomEndRadius:15,
    borderBottomLeftRadius:15,
    backgroundColor: colors.WHITE,
  },
  title: {
    fontSize: 13,
    color:colors.BLACK,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 10,
  },
  profileStyle:{
      width:100,
      height:100,
      borderRadius:40,
      overflow:'hidden'
  }


})