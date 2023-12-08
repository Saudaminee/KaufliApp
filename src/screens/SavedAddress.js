import { Text, View ,TouchableOpacity,SafeAreaView,Image,StatusBar} from 'react-native'
import React from 'react'
import CommonHeaders from '../components/commons/CommonHeaders'
import styles from '../utils/styles/styles'
import { colors } from '../utils/styles/colors'

const SavedAddress = () => {
  return (
    <SafeAreaView>
     <StatusBar backgroundColor="white" barStyle="dark-content" />
     <ProfileHeader title="Delivery addresses"  />

      <Text>SavedAddress</Text>
    </SafeAreaView>
  )
}

export default SavedAddress
