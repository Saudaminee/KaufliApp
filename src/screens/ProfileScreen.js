import React, { useState } from 'react';
import { View, Text, FlatList, Image,TouchableOpacity, SafeAreaView ,ImageBackground,StatusBar} from 'react-native';
import styles from '../utils/styles/styles'
import { IMAGES, getImageFromURL } from "../resources/images";
import { colors } from '../utils/styles/colors';
import ProfileHeader from '../components/commons/ProfileHeader';

const ProfileScreen = () => {
  return (
    <SafeAreaView >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
     <ProfileHeader name="Hello user" />

     <View style={styles.content}>

     

     </View>

    </SafeAreaView>
  )
}

export default ProfileScreen
