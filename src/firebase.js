import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyD0s1ysTtLEaTvnlMzoablLsyuN0rE7rjs",
        authDomain: "messenger-app-d617a.firebaseapp.com",
        databaseURL: "https://messenger-app-d617a.firebaseio.com",
        projectId: "messenger-app-d617a",
        storageBucket: "messenger-app-d617a.appspot.com",
        messagingSenderId: "897642226223",
        appId: "1:897642226223:web:99599cee8810b140855cda",
        measurementId: "G-KX4K1NSC32"
})

const db = firebaseApp.firestore()
export default db ;