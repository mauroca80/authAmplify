import React, {useEffect} from 'react';

import {Text, Alert, TextInput, View, Button} from 'react-native';

import withSignIn from '../hoc/withSignIn';
import {SignInPayload} from '../redux/actions/signIn';

interface SignInProps {
  signIn: (payload: SignInPayload) => any;
  error: null | Error;
  loading: boolean;
}

const defaultState = {
  login: '',
  password: '',
};

const SignIn: React.FC<SignInProps> = ({signIn, error, loading}) => {
  useEffect(() => {
    if (error) {
      Alert.alert(error.message);
    }
  }, [error, loading]);
  const [state, setState] = React.useState(defaultState);
  return (
    <View>
      {loading && <Text>loading</Text>}

      <Text>Ventana login</Text>
      <TextInput
        testID="login"
        placeholder="Login"
        onChangeText={login => {
          setState({
            ...state,
            login,
          });
        }}
      />
      <TextInput
        testID="password"
        placeholder="password"
        onChangeText={password => {
          setState({
            ...state,
            password,
          });
        }}
      />
      <Button
        testID="button"
        title="Login"
        onPress={() =>
          signIn({username: state.login, password: state.password})
        }
      />
    </View>
  );
};

export default withSignIn(SignIn);
