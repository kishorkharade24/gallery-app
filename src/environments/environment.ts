// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD6pKpTPVsNaJy_KZut9xiqDeJHRfuquNs',
    authDomain: 'angular4-gallery-app.firebaseapp.com',
    databaseURL: 'https://angular4-gallery-app.firebaseio.com',
    projectId: 'angular4-gallery-app',
    storageBucket: 'angular4-gallery-app.appspot.com',
    messagingSenderId: '368641622019'
  }
};
