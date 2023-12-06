import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../utils/styles/colors';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import DetailedScreen from '../screens/DetailedScreen';
// import RequestsScreen from '../screens/RequestsScreen';
// import BlockedList from '../screens/BlockedList';

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
              {/* <Image
                source={focused ? require('../assests/request1.png') : require('../assests/request.png')}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 26,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                }}
              /> */}
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 14 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>Home</Text>
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Track Orders"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {/* <Image
                source={focused ? require('../assests/request1.png') : require('../assests/request.png')}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 26,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                }}
              /> */}
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 14 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>Track</Text>
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {/* <Image
                source={focused ? require('../assests/request1.png') : require('../assests/request.png')}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 26,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                }}
              /> */}
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 14 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>Favorites</Text>
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
              {/* <Image
                source={focused ? require('../assests/request1.png') : require('../assests/request.png')}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 26,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                }}
              /> */}
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 14 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>Cart</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Account"
        // component={HomeScreen}
        component={DetailedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {/* <Image
                source={focused ? require('../assests/blockuser1.png') : require('../assests/blockuser.png')}
                resizeMode="contain"
                style={focused ? {
                  width: 26,
                  height: 26,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                } : {
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                  tintColor: colors.BASE_TEXT_COLOR,
                }}
              /> */}
              <Text style={focused ? { color: colors.BASE_TEXT_COLOR, fontSize: 14 } : { color: colors.BASE_TEXT_COLOR, fontSize: 11 }}>My Account</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );

}

export default BottomTabsManager

const styles = StyleSheet.create({})