// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
declare let require: any;

export const environment = {
  VERSION: require('../../package.json').version,
  production: false,
  firebase: {
    apiKey: 'AIzaSyA2icho_IpNSI8BUDdrJrM28PZAj9n1q1g',
    authDomain: 'handywings-d6698.firebaseapp.com',
    databaseURL: 'https://handywings-d6698.firebaseio.com',
    projectId: 'handywings-d6698',
    storageBucket: 'handywings-d6698.appspot.com',
    messagingSenderId: '48370462304',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
