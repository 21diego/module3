import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCMS6DRH53FDdsU4s57XSDLnt-lOeNoSTs",
  authDomain: "nysl-prueba-3d5a5.firebaseapp.com",
  databaseURL: "https://nysl-prueba-3d5a5.firebaseio.com",
  projectId: "nysl-prueba-3d5a5",
  storageBucket: "nysl-prueba-3d5a5.appspot.com",
  messagingSenderId: "819275204874",
  appId: "1:819275204874:web:5e02d68d06481d968852f3"
};

export const app = firebase.initializeApp(config);
export const db = app.database();