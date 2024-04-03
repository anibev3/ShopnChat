// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'get-stream-id',
    appId: '1:590323492729:web:079e3c087e3d3f17f7f1a8',
    storageBucket: 'get-stream-id.appspot.com',
    apiKey: 'AIzaSyAccQYlyM42Kmg_3UxQ9K0b-gz6AzAX2Ts',
    authDomain: 'get-stream-id.firebaseapp.com',
    messagingSenderId: '590323492729',
  },
  production: false,
  apiUrl: 'https://us-central1-get-stream-id.cloudfunctions.net',
  stream: {
    key: 'a47suhnymbwq',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
