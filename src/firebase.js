import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyCYCw4TRnQ01SBTrpNglZv-6Ic-xa7Yg0I",
    authDomain: "clone-ec248.firebaseapp.com",
    databaseURL: "https://clone-ec248.firebaseio.com",
    projectId: "clone-ec248",
    storageBucket: "clone-ec248.appspot.com",
    messagingSenderId: "57963700455",
    appId: "1:57963700455:web:7d29b2a32ac0ee4b52c242",
    measurementId: "G-X11GWXQNXZ"
})

const auth = firebase.auth();

export { auth };