import React from 'react';
import Amplify from 'aws-amplify';
import {Provider} from 'react-redux';
import AppNavigation from './navigation/AppNavigation';
import RootNavigation from './navigation/RootNavigation';

import {
  AMPLIFY_AUTH_REGION,
  AMPLIFY_AUTH_IDENTITY_POOL_ID,
  AMPLIFY_AUTH_USER_POOL_ID,
  AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID,
} from 'react-native-dotenv';
import store from './store';

Amplify.configure({
  Auth: {
    region: AMPLIFY_AUTH_REGION,
    identityPoolId: AMPLIFY_AUTH_IDENTITY_POOL_ID,
    userPoolId: AMPLIFY_AUTH_USER_POOL_ID,
    userPoolWebClientId: AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID,
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigation
        ref={navigatorRef => {
          RootNavigation.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
