import { Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import CommonHeaders from '../components/commons/CommonHeaders'
import { useNavigation } from "@react-navigation/native";

const SaleScreen = () => {
  return (
    <SafeAreaView>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <CommonHeaders title="Trendings" />
    <Text>SALE</Text>
</SafeAreaView>
  )
}

export default SaleScreen
