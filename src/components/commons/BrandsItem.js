import React from 'react';
import { View, Image,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../utils/styles/colors';
import styles from '../../utils/styles/styles';

const BrandsItem = ({ title, backgroundColor }) => {
    return (
        <View style={[styles.brandContainer, { backgroundColor}]}>
          {/* <Image source={image} style={styles.categoryStyle} /> */}
          <TouchableOpacity style={styles.categoryStyle}>
          <Text style={{textAlign:'center',fontSize:12,color:colors.BLACK,fontWeight:'900'}}>{title}</Text>
          </TouchableOpacity>
         
        </View>
      );
}

export default BrandsItem
