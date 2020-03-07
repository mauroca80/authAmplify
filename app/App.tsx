import Navigation from './navigation/Navigation';
import {createAppContainer} from 'react-navigation';
import Amplify from 'aws-amplify';

import {
  AMPLIFY_AUTH_REGION,
  AMPLIFY_AUTH_IDENTITY_POOL_ID,
  AMPLIFY_AUTH_USER_POOL_ID,
  AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID,
} from 'react-native-dotenv';

Amplify.configure({
  Auth: {
    region: AMPLIFY_AUTH_REGION,
    identityPoolId: AMPLIFY_AUTH_IDENTITY_POOL_ID,
    userPoolId: AMPLIFY_AUTH_USER_POOL_ID,
    userPoolWebClientId: AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID,
  },
});

const App = createAppContainer(Navigation);

export default App;
