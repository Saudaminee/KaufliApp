// Register.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/authActions';
import styles from '../../utils/styles/styles'

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegister = () => {
    const userData = { email, password };
    dispatch(register(userData));
    // Add logic to navigate to the home screen upon successful registration.
    navigation.navigate("Login")
  };

  return (
    <View style={styles.containerApp}>
      <Text>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};



export default Register;
