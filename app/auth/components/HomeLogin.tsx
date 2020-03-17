import React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainerProps} from 'react-navigation';
const HomeLogin: React.FC<NavigationContainerProps> = props => {
  return (
    <View>
      <Text>Bienvenidos</Text>
      <Button
        onPress={() => props.navigation?.navigate('SignIn')}
        title="Login"
      />
      <Button
        title="Registrarse"
        onPress={() => props.navigation?.navigate('SignUp')}
      />
      <Text onPress={() => props.navigation?.navigate('ForgotPassword')}>
        Perdiste tu contraseña
      </Text>
    </View>
  );
};

export default HomeLogin;
