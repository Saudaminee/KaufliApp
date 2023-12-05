// CategoryItem.js
import React from 'react';
import { View, Image,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../utils/styles/colors';
import styles from '../../utils/styles/styles';

const CategoryItem = ({ title}) => {
  return (
    <View style={styles.containerCategory}>
      {/* <Image source={image} style={styles.categoryStyle} /> */}
      <TouchableOpacity style={styles.categoryStyle}>
      <Text style={{textAlign:'center',fontSize:11,color:colors.BLACK}}>{title}</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default CategoryItem;
