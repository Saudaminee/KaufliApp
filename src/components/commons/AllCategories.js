import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { colors } from '../../utils/styles/colors'

const AllCategories = ({id,image,name}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image style={styles.image} source={image} />
    </TouchableOpacity>
  )
}

export default AllCategories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: colors.GRAYS_WHITE,
        borderRadius: 8,
        padding: 8,
        elevation:5
      },
      image:{
          height:60,
          width:80,
          resizeMode:'contain'
      },
      title:{
          fontSize:12,
          fontWeight:'800',
          alignSelf:'center',
          color:colors.BASE_TEXT_COLOR
      }
})