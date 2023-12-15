import { View, Text, FlatList, StyleSheet,SafeAreaView,StatusBar, Dimensions,ImageBackground } from 'react-native';

import React, { useState, useRef, useEffect } from 'react'
import CommonHeaders from '../components/commons/CommonHeaders'
import { useNavigation } from "@react-navigation/native";
import { Image } from 'react-native-reanimated/lib/typescript/Animated';

const SaleScreen = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: 1,
      img: require('../assets/slider1.png'),
      title:"jdhj"
    },
    {
      id: 2,
      img: require('../assets/slider2.png'),
      title:"data"
    },
    {
      id: 3,
      img: require('../assets/slider3.png'),
      title:"jadoo"
    }
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex =
        currentIndex === data.length - 1 ? 0 : currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    }, 3000); // Adjust the interval as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [currentIndex, data]);

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
    <ImageBackground style={{flex:1,width:Dimensions.get('window').width}} source={item.img}>
    <Text>{item.title}</Text>
    </ImageBackground>
    
    </View>
  );

  const renderDot = (index) => (
    <View
      style={[
        styles.dot,
        { backgroundColor: index === currentIndex ? 'blue' : 'gray' },
      ]}
    />
  );

  return (
    <SafeAreaView>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <CommonHeaders title="Trendings" />
     <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.dotContainer}>
        {data.map((_, index) => renderDot(index))}
      </View>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get('window').width,
    height: 200, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});


export default SaleScreen
