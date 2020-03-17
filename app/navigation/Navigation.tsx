import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator} from 'react-navigation';

import SignIn from '../auth/components/SignIn';
import HomeLogin from '../auth/components/HomeLogin';
import SignUp from '../auth/components/SignUp';
import ForgotPassword from '../auth/components/ForgotPassword';
import HomeApp from '../home/components/HomeApp';
const authStack = createStackNavigator({
  HomeLogin,
  SignIn,
  SignUp,
  ForgotPassword,
});
const HomeAppStack = createStackNavigator({
  HomeApp,
});

const rootSwitch = createSwitchNavigator({
  authStack,
  HomeAppStack,
});

export default rootSwitch;
