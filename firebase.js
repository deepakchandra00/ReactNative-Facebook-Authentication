
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "API Key",
    authDomain: "jobplatform-b4f50.firebaseapp.com",
    databaseURL: "https://jobplatform-b4f50.firebaseio.com",
    projectId: "jobplatform-b4f50",
    storageBucket: "jobplatform-b4f50.appspot.com",
    messagingSenderId: "317472909457",
    appId: "App ID",
    measurementId: "G-0HDB8VQ9ZM"
  };

firebase.initializeApp(firebaseConfig);

export default firebase