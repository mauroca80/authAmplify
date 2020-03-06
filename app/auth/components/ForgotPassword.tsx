import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  return (
    <View>
      <Text testID="textForgot">Olvidaste tu password</Text>
      <TextInput testID="email" placeholder="Tu email" />
      <Button
        testID="button"
        title="Enviar Email"
        onPress={() => console.log('')}
      />
    </View>
  );
};
export default ForgotPassword;
