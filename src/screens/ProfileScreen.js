import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import styles from "../utils/styles/styles";
import { IMAGES, getImageFromURL } from "../resources/images";
import { colors } from "../utils/styles/colors";
import ProfileHeader from "../components/commons/ProfileHeader";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ProfileHeader
        name="Hello!!  John doe"
        mobile="1234567890"
        email="johndoe@gmail.com"
        navigation={navigation}
      />
      <ScrollView
        style={{
          backgroundColor: colors.WHITE,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          marginTop: 10,
          paddingBottom: "10%",
        }}
      >
        <View>
          <Text
            style={[
              styles.profileText,
              {
                fontSize: 12,
                fontWeight: "bold",
                paddingHorizontal: "5%",
                paddingTop: 10,
              },
            ]} > My Payments
          </Text>
          <TouchableOpacity
            style={[styles.commonTouchProfile, { marginTop: "3%" }]}
          >
            <Text style={styles.profileText}>Bank & UPI details </Text>
            <Image
              style={styles.iconStyle}
              source={getImageFromURL(IMAGES.NEXT_ICON)}
            ></Image>
          </TouchableOpacity>
          <View style={styles.lineView}></View>

          <TouchableOpacity style={styles.commonTouchProfile}>
            <Text style={styles.profileText}>Payment & Refund </Text>
            <Image
              style={styles.iconStyle}
              source={getImageFromURL(IMAGES.NEXT_ICON)}
            ></Image>
          </TouchableOpacity>
          <View style={styles.lineView}></View>

          <Text
            style={[
              styles.profileText,
              {
                fontSize: 12,
                fontWeight: "bold",
                paddingHorizontal: "5%",
                paddingTop: "5%",
              },
            ]}>My Activity
          </Text>

          <TouchableOpacity
            style={[styles.commonTouchProfile, { marginTop: "3%" }]}
          >
            <Text style={styles.profileText}>My Rewards</Text>
            <Image
              style={styles.iconStyle}
              source={getImageFromURL(IMAGES.NEXT_ICON)}
            ></Image>
          </TouchableOpacity>
          <View style={styles.lineView}></View>

          <TouchableOpacity
            style={styles.commonTouchProfile}
            onPress={() => navigation.navigate("OrderHistory")}
          >
            <Text style={styles.profileText}>Orders</Text>
            <Image
              style={styles.iconStyle}
              source={getImageFromURL(IMAGES.NEXT_ICON)}
            ></Image>
          </TouchableOpacity>
          <Text style={[styles.profileText, { fontSize: 12, fontWeight: 'bold', paddingHorizontal: '5%', paddingTop: '5%' }]} >My Activity </Text>

          <TouchableOpacity style={[styles.commonTouchProfile, { marginTop: '3%' }]}>
            <Text style={styles.profileText} >My Rewards</Text>
            <Image style={styles.iconStyle} source={getImageFromURL(IMAGES.NEXT_ICON)}></Image>
          </TouchableOpacity>
          <View style={styles.lineView}></View>

          <TouchableOpacity style={styles.commonTouchProfile} onPress={() => navigation.navigate("OrderHistory")}>
            <Text style={styles.profileText} >Orders</Text>
            <Image style={styles.iconStyle} source={getImageFromURL(IMAGES.NEXT_ICON)}></Image>
          </TouchableOpacity>


          <View style={styles.lineView}></View>
          <TouchableOpacity style={styles.commonTouchProfile} onPress={() => navigation.navigate("SavedAddress")}>
            <Text style={styles.profileText} >Address</Text>
            <Image style={styles.iconStyle} source={getImageFromURL(IMAGES.NEXT_ICON)}></Image>
          </TouchableOpacity>
          <View style={styles.lineView}></View>

          <Text
            style={[
              styles.profileText,
              {
                fontSize: 12,
                fontWeight: "bold",
                paddingHorizontal: "5%",
                paddingTop: "5%",
              },
            ]} > Others
          </Text>

          <TouchableOpacity
            style={[styles.commonTouchProfile, { marginTop: "3%" }]}
          >
            <Text style={styles.profileText}>Terms & Conditions</Text>
            <Image
              style={styles.iconStyle}
              source={getImageFromURL(IMAGES.NEXT_ICON)}
            ></Image>
          </TouchableOpacity>
          <View style={styles.lineView}></View>

          <TouchableOpacity style={styles.commonTouchProfile}>
            <Text style={styles.profileText}>Return & Refunds Policy</Text>
            <Image
              style={styles.iconStyle}
              source={getImageFromURL(IMAGES.NEXT_ICON)}
            ></Image>
          </TouchableOpacity>
          <View style={styles.lineView}></View>

          <TouchableOpacity style={styles.commonTouchProfile}>
            <Text style={styles.profileText}>Who are we ?</Text>
            <Image
              style={styles.iconStyle}
              source={getImageFromURL(IMAGES.NEXT_ICON)}
            ></Image>
          </TouchableOpacity>
          <View style={[styles.lineView, { paddingBottom: "36%" }]}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
