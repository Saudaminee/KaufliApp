import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../utils/styles/colors';
import { IMAGES, getImageFromURL } from "../resources/images";
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTabsManager = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="LandingPage"
      screenOptions={{
        tabBarActiveTintColor: "#ACE1AF",
        // tabBarIcon: ({ focused }) => {
        //   <Image
        //     source={focused ? require('../assests/home.png') : require('../assests/home1.png')}
        //     style={{ width: 24, height: 24 }}
        //   />
        // },
        // tabBarStyle:{
        //     height:60, position:'absolute', bottom:20,borderRadius:90, marginHorizontal:25
        // }
        tabBarLabelStyle: {
          display: 'none'
        },
        headerShown: false,
      }}
    >
      {/* <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
            
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 14 } : { color: colors.BASE_TEXT_COLOR, fontSize: 13 }}>Home</Text>
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Search Products"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={focused ? getImageFromURL(IMAGES.KAULI_ICON) : getImageFromURL(IMAGES.K_ICON)}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 15,
                  alignSelf: 'center',
                  // tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 22,
                  height: 15,
                  alignSelf: 'center',
                  // tintColor: colors.BASE_TEXT_COLOR,
                }}
              />
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 13 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>Home</Text>
            </View>
          ),
        }}
      />
       {/* <Tab.Screen
        name="Track Orders"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={focused ? getImageFromURL(IMAGES.SEARCH_SELECTED) : getImageFromURL(IMAGES.SEARCH_ICON)}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 15,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 22,
                  height: 15,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                }}
              />
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 13 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>Search</Text>
            </View>
          ),
        }}
      /> */}
        <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={focused ? getImageFromURL(IMAGES.LIKE) : getImageFromURL(IMAGES.UNLIKE)}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 15,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 26,
                  height: 15,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                }}
              />
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 13 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>Favorites</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shopping Bag"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={focused ? getImageFromURL(IMAGES.CARTFILL_ICON) : getImageFromURL(IMAGES.CART_ICON)}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 15,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 26,
                  height: 15,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                }}
              />
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 13 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>Cart</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Account"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={focused ? getImageFromURL(IMAGES.ACCOUNT_FILL_ICON) : getImageFromURL(IMAGES.ACCOUNT_ICON)}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 15,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 26,
                  height: 15,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                }}
              />
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 13 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>My Account</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );

}

export default BottomTabsManager

const styles = StyleSheet.create({})