import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { colors } from '../../utils/styles/colors';
import { useNavigation } from '@react-navigation/native';

const DetailScreenHeader = ({title}) => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <TouchableOpacity
              ///  style={styles.backbtnView}
              style={{
                  left:0,
                  position:'absolute',
                padding: 10,
                backgroundColor: colors.WHITE,
                borderRadius: 10,
              }}
              onPress={() => navigation.goBack()} >
              <Image
                source={require("../../assets/arrow.png")}
                style={{ width: 15, height: 15 }}
                resizeMode={"center"}
              />
            </TouchableOpacity>

    <Text style={styles.title}>{title}</Text>
    {/* Add more header content or customization as needed */}
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      elevation:1,
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
  });

export default DetailScreenHeader
