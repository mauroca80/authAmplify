import React, {useEffect} from 'react';
import {TextInput, View, Text, Button, Alert} from 'react-native';
import withSignUp from '../hoc/withSignUp';

import {SignUpPayload} from '../redux/actions/signUp';
interface SignUpProps {
  loading: string;
  error: ErrorProps;
  signUp: (payload: SignUpPayload) => void;
  navigation: any;
}

interface StateProps {
  email: string;
  password: string;
}

const defaultState: StateProps = {
  email: '',
  password: '',
};
interface ErrorProps {
  code: string;
  message: string;
  name: string;
}

const SignUp: React.FC<SignUpProps> = ({error, loading, signUp}) => {
  useEffect(() => {
    if (error) {
      Alert.alert(error.message);
    }
  }, [error]);
  const [state, setState] = React.useState(defaultState);

  return (
    <View>
      <Text>Registrate</Text>
      <TextInput
        testID="email"
        value={state.email}
        placeholder="Correo"
        keyboardType="email-address"
        onChangeText={email => {
          setState({
            ...state,
            email,
          });
        }}
      />
      <TextInput
        testID="password"
        placeholder="password"
        onChangeText={password =>
          setState({
            ...state,
            password,
          })
        }
        value={state.password}
      />
      <Button
        testID="button"
        title="Registrate"
        onPress={() => {
          signUp({
            username: state.email,
            password: state.password,
          });
        }}
      />
    </View>
  );
};
export default withSignUp(SignUp);
