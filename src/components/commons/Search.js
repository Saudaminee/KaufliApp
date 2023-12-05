import { View, TextInput, TouchableOpacity, StyleSheet,Text ,Image} from 'react-native'
import React, { useState } from 'react'
import { IMAGES, getImageFromURL } from "../../resources/images"
import { colors } from '../../utils/styles/colors';

const Search = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');
    const handleSearch = () => {
        // Perform any action related to search (e.g., filtering data)
        onSearch(searchText);
      };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSearch} style={styles.input}>
        {/* You can use a search icon or any other indicator here */}
        <Image source={getImageFromURL(IMAGES.SEARCH_ICON)}  style={styles.icon} />
        <TextInput
        placeholder="Search the entire shop or products.."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
      backgroundColor:colors.WHITE,
    },
    input: {
      flex: 1,
      height:40,
      marginHorizontal:'5%',
      borderWidth: 1,
      flexDirection:'row',
      borderColor: colors.GRAYS_WHITE,
      backgroundColor:colors.GRAYS_WHITE,
      alignSelf:'center',
      justifyContent:'center',
      borderRadius: 10,
    },icon: {
        width: 18,
        height: 18,
        alignSelf:'center',
        tintColor:colors.GRAY
      },
  });
export default Search
