// CategoryItem.js
import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/styles/colors";
import styles from "../../utils/styles/styles";
import { useNavigation } from "@react-navigation/native";

const CategoryItem = ({ id, title, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{height:100,flexDirection:'column',marginRight:18,alignItems:'center',justifyContent:'center'}} onPress={()=> navigation.navigate("ProductListScreen",{id:id,title:title})}>
      <View style={styles.categoryStyle}>
        <Image source={image} style={[styles.containerCategory, { height: 65, width: 65,resizeMode:'contain', borderRadius: 50, justifyContent: 'center' }]} />
      </View>
      <Text
          style={{ fontSize: 11, color: colors.BLACK, alignSelf: 'center', fontWeight:'500' ,textAlign:'center'}} >
          {title}
        </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
