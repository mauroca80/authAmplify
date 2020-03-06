import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';

import SignIn from '../auth/components/SignIn';
import HomeLogin from '../auth/components/HomeLogin';
import SignUp from '../auth/components/SignUp';
import ForgotPassword from '../auth/components/ForgotPassword';
const authStack = createStackNavigator({
  HomeLogin,
  SignIn,
  SignUp,
  ForgotPassword,
});

const rootSwitch = createSwitchNavigator({
  authStack,
});

export default rootSwitch;
