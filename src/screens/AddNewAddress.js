import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../components/commons/CustomTextInput";
import CustomButton from "../components/commons/CustomButton";
import { useDispatch } from "react-redux";
import { addAddress } from "../stores/actions/authActions";

const AddNewAddress = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState("");
  const [building, setBuilding] = useState("");
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            marginLeft: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            padding: 7,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={require("../assets/arrow.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        placeholder={"Enter City Name"}
        value={city}
        onChangeText={(txt) => {
          setCity(txt);
        }}
        icon={require("../assets/buildings.png")}
      />
      <CustomTextInput
        placeholder={"Enter Building Name"}
        value={building}
        onChangeText={(txt) => {
          setBuilding(txt);
        }}
        icon={require("../assets/building.png")}
      />
      <CustomTextInput
        placeholder={"Enter Pincode Name"}
        value={pin}
        keyboardType={"number-pad"}
        onChangeText={(txt) => {
          setPin(txt);
        }}
        icon={require("../assets/pin.png")}
      />
      <CustomButton
        title={"Save Address"}
        onPress={() => {
          if (city !== "" && building !== "" && pin !== "") {
            dispatch(
              addAddress({ city: city, building: building, pincode: pin })
            );
            navigation.goBack();
          }
        }}
      />
    </View>
  );
};

export default AddNewAddress;
