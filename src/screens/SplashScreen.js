import {Text, View,StatusBar,Image } from 'react-native'
import React,{useEffect} from 'react'
import { IMAGES, getImageFromURL } from "../resources/images"
import styles from '../utils/styles/styles'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        funcNavigate();
      }, []);
      const funcNavigate = async () => {
        setTimeout(() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "HomeScreen" }],
            });
        }, 2000);
      };

  return (
    <View style={styles.containerApp}>
    <StatusBar barStyle={"light-content"} />
    <View style={{ alignItems: 'center' }}>

      <Image
        style={{ height: 250, width: 250, resizeMode: 'contain' }}
        source={getImageFromURL(IMAGES.LOGO)} />
      <Text style={{ color: 'white', fontSize: 18,marginTop:-20 ,fontWeight:'700'}}>Kaufli</Text>

    </View>
  </View>
  )
}

export default SplashScreen