import { Text, View, SafeAreaView, StatusBar, FlatList, Image } from 'react-native'
import React from 'react'
import CommonHeaders from '../components/commons/CommonHeaders'
import { useNavigation } from "@react-navigation/native";
import AllCategories from '../components/commons/AllCategories';
import { IMAGES, getImageFromURL } from "../resources/images";
import { colors } from '../utils/styles/colors';

const CategoriesScreen = ({route}) => {
    const navigation = useNavigation();
    const { data } = route.params;
  
    
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <CommonHeaders title="All categories" />
          
          <View style={{marginHorizontal:15,marginTop:'5%'}}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <AllCategories
                        id={item.id}
                        name={item.title}
                        image={item.image}/>
                )}
            />
            </View>
        </SafeAreaView>
    )
}

export default CategoriesScreen
