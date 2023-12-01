// Login.js
import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, Animated ,Platform} from 'react-native';
import { IMAGES, getImageFromURL } from "../../resources/images"
import styles from '../../utils/styles/styles'
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authActions';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false, // false because 'backgroundColor' is not supported by the native driver
    }).start();
  }, [animatedValue]);

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 0],
  });

  const handleLogin = () => {
    const userData = { email, password };
    dispatch(login(userData));
    // Add logic to navigate to the home screen upon successful login
    navigation.navigate("Home")
  };

  return (
    <View style={[styles.containerApp, { marginHorizontal: 15 }]}>

      <Text>Login</Text>
      <Image
        style={{ height: 180, width: 180, resizeMode: 'contain',justifyContent:'center',alignSelf:'center' }}
        source={getImageFromURL(IMAGES.LOGO)} />

      <Animated.View style={{ transform: [{ translateY }] }}>
        <View style={styles.inputBox,{...(Platform.OS === 'android' ? { elevation: 1 ,overflow:'hidden'} : { shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 3.84 })}} >
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </Animated.View>
      <Animated.View style={{ transform: [{ translateY }] }}>
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Don't have an account? Register here"
        onPress={() => navigation.navigate('Register')}
      />
      </Animated.View>
    </View>
  );
};


export default Login;
