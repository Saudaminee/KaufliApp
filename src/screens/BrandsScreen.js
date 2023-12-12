import { Text, View, SafeAreaView, StatusBar, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import CommonHeaders from '../components/commons/CommonHeaders'
import { IMAGES, getImageFromURL } from "../resources/images";
import { colors } from '../utils/styles/colors';
import MarqueeHorizontal, { MarqueeType, Direction } from 'react-native-marquee-ab';

const mWidth = Dimensions.get('window').width;

const BrandsScreen = ({ route }) => {
  const { data } = route.params;

  const marq = [
    { value: 'TEXT' },
    // { value : '挼尽梅花无好意，赢得满衣清泪。' },
    { value: 'HELLO' },
    { value: 'DATA' },
  ]

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={{ flex: 1, margin: 8, alignItems: 'center', flexDirection: 'column' }}>
      <View style={{ backgroundColor: colors.BASE_TEXT_COLOR, borderRadius: 10, padding: '4%', width: '100%', height: 80 }}>
        <Image source={item.image} style={{ width: '100%', height: 60, borderRadius: 8, resizeMode: 'contain' }} />
      </View>
      <Text style={{ color: colors.BLACK, marginTop: 5, fontSize: 14, fontWeight: '600' }}>{item.title}</Text>
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

      {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <MarqueeHorizontal
          // ref={(ref) => (mq = ref)}
          data={marq}
          type={MarqueeType.Simple}
          delay={300}
          duration={5000}
          speed={170}
          itemMaxWidth={1024}
          // direction={Direction.Left}
          autoPlay={true}
          iterations={-1}
          separator={20}
          reverse={true}
          isEndToEnd={true}
          // onClick={(item) => {
          //     alert(JSON.stringify(item));
          //     console.log('click', item);
          // }}
          textStyle={{
            fontSize: 14,
          }}
        />
      </View> */}
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
