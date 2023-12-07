import { StyleSheet, Text, View ,TouchableOpacity, Image,ImageBackground,Alert} from 'react-native'
import React,{useState} from 'react'
import { colors } from '../../utils/styles/colors';
import { IMAGES, getImageFromURL } from "../../resources/images";
import { useNavigation } from '@react-navigation/native';
import staticContents from '../../utils/staticContents';

const ProfileHeader = ({ name,mobile,email}) => {
    const navigation = useNavigation();

    //Logout function
    const logoutUser = async () => {
        Alert.alert(
            staticContents.logout_user,
            staticContents.sure_want_logout,
            [
                {
                    text: "cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "yes",
                    onPress: () => { 
                        // AsyncStorage.removeItem()
                        // AsyncStorage.clear().then(() => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: "Login" }],
                            });
                        // });
                    },
                },
            ],
            { cancelable: false }
        );
    };

  return (
    <View style={styles.container}>

    <TouchableOpacity style={{right:15,position:'absolute',top:10}} onPress={() => logoutUser()}> 
    <Image style={{width:24,height:24,resizeMode:'contain'}} source={getImageFromURL(IMAGES.LOGOUT)} />
    </TouchableOpacity>

    <Image style={{width:100,height:90,resizeMode:'contain'}} source={getImageFromURL(IMAGES.LOGO)} />
   
   <View>
   <Text style={styles.title}>{name}</Text>
   <Text style={styles.subtitle}>{email}</Text>
   <Text style={styles.subtitle}>{mobile}</Text>
   </View>
    
   {/* <View style={{width:90,height:90}}>
    <ImageBackground source={getImageFromURL(IMAGES.SHOO)} style={[styles.profileStyle]}>
    </ImageBackground>
 
    </View> */}
   
  </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({ 
    container: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding:5,
    borderBottomEndRadius:15,
    borderBottomLeftRadius:15,
    backgroundColor: colors.WHITE,
  },
  title: {
    fontSize: 18,
    color:colors.BLACK,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 10,
    alignSelf:'center',
    color:colors.BLACK_TWO
  },
  profileStyle:{
      width:90,
      height:90,
      padding:5,
      borderWidth:1,
      justifyContent:'center',
      backgroundColor:'red',
      borderRadius:80,
      overflow:'hidden'
  }


})