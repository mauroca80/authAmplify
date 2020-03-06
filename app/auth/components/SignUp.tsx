import React from 'react';
import {TextInput, View, Text, Button} from 'react-native';

interface SignUpProps {}
const SignUp: React.FC<SignUpProps> = () => {
  return (
    <View>
      <Text>Registrate</Text>
      <TextInput testID="email" placeholder="Correo" />
      <TextInput testID="password" placeholder="password" />
      <Button
        testID="button"
        title="Registrate"
        onPress={() => console.log('algo')}
      />
    </View>
  );
};
export default SignUp;
