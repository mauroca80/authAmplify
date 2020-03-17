import React from 'react';
import {Text} from 'react-native';
import store from '../../store';

const HomeApp = () => {
  console.log('HOME STORE', store.getState());
  return <Text>HomeApp</Text>;
};

export default HomeApp;
