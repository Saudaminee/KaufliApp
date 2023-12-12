import { Text, View, SafeAreaView, StatusBar, FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import CommonHeaders from '../components/commons/CommonHeaders'
import { IMAGES, getImageFromURL } from "../resources/images";
import { colors } from '../utils/styles/colors';

const BrandsScreen = ({route}) => {
  const { data } = route.params;
   
      const renderCategoryItem = ({ item }) => (
        <TouchableOpacity style={{ flex: 1, margin: 8, alignItems: 'center',backgroundColor:colors.BASE_TEXT_COLOR ,borderRadius:10,padding:'3%'}}>
          <Image source={item.image} style={{ width: '100%', height: 100, borderRadius: 8,resizeMode:'contain' }} />
          <Text style={{color:colors.WHITE,marginTop:5,fontSize:14,fontWeight:'bold'}}>{item.title}</Text>
        </TouchableOpacity>
      );
    
      const renderCategories = ({ item }) => (
        <View style={{ flexDirection: 'row' }}>
          {item.map((categoryItem) => (
            <View key={categoryItem.id} style={{ flex: 1 }}>
              {renderCategoryItem({ item: categoryItem })}
            </View>
          ))}
        </View>
      );

      const getCategoriesInRows = () => {
        const itemsPerRow = 2;
        const rows = [];
    
        for (let i = 0; i < data.length; i += itemsPerRow) {
          const rowItems = data.slice(i, i + itemsPerRow);
          rows.push(rowItems);
        }
    
        return rows;
      };

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <CommonHeaders title="All Brands" />

            <FlatList
                data={getCategoriesInRows()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderCategories}
                contentContainerStyle={{ padding: 8 }}
            />
        </SafeAreaView>
    )
}

export default BrandsScreen
