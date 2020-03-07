declare module 'react-native-dotenv' {
  export const ENV: 'dev' | 'prod';
  export const AMPLIFY_AUTH_REGION: string;
  export const AMPLIFY_AUTH_IDENTITY_POOL_ID: string;
  export const AMPLIFY_AUTH_USER_POOL_ID: string;
  export const AMPLIFY_AUTH_USER_POOL_WEB_CLIENT_ID: string;
}
