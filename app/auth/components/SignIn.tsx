import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';

const SignIn = () => {
  return (
    <View>
      <Text>Ventana login</Text>
      <TextInput testID="login" placeholder="Login" />
      <TextInput testID="password" placeholder="password" />
      <Button testID="button" title="Login" onPress={() => console.log('')} />
    </View>
  );
};

export default SignIn;
