import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Search from '../components/commons/Search'

const SearchScreen = () => {
    const handleSearch = (searchText) => {
        // Handle the search action (e.g., filter data based on searchText)
        console.log("Searching for:", searchText);
      };
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Search onSearch={handleSearch} />
            <Text>SearchScreen</Text>
        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})