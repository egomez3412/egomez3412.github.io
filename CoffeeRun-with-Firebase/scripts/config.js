// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBC3yCf3HbfEmnkN97KrPKGJa36xKfq8Kg",
    authDomain: "coffeerun-2e95c.firebaseapp.com",
    projectId: "coffeerun-2e95c",
    storageBucket: "coffeerun-2e95c.appspot.com",
    messagingSenderId: "153485885012",
    appId: "1:153485885012:web:869bad895d20eb8cb837c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings( { timestampsInSnapshots: true});