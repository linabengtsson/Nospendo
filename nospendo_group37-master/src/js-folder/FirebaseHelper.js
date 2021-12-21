import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import {goToHomepage, goToLogin} from "../App.js";


const firebaseConfig = {
    apiKey: "AIzaSyDbb1NeTvVYq8NAXkockHb8FmXlRPkEzyw",
    authDomain: "asos-project-group37.firebaseapp.com",
    databaseURL: "https://asos-project-group37.firebaseio.com",
    projectId: "asos-project-group37",
    storageBucket: "asos-project-group37.appspot.com",
    messagingSenderId: "1045561479939",
    appId: "1:1045561479939:web:6d1c5fe7696db80fc64f36",
    measurementId: "G-26C114DCVN"
  };
  
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = firebase.auth();

class FirebaseHelper{

    signUp(email, pass, callback){
        auth.createUserWithEmailAndPassword(email,
            pass).then(()=> this.signIn(email, pass, callback))
            .catch((error)=> alert(error.message));
    }

    signIn(email, pass, callback){    
        auth.signInWithEmailAndPassword(email,
            pass).then(()=> this.readFromCart()).then((data)=>{
                callback(data);
                goToHomepage();})
            .catch((error)=> alert(error.message));
    }

    signOut(){
        auth.signOut().then(goToLogin);
    }

    //Metod för att skriva till Firebase (cart)
    writeToCart(articles){
        database.ref('users/' + auth.currentUser.uid +'/cart').set(articles);
    }

    //Metod för att hämta från Firebase (cart)
    readFromCart(){
        return new Promise((resolve, reject)=>{
            var readingRef = database.ref('users/' + auth.currentUser.uid +'/cart')
            readingRef.on('value', (snapshot) => {
                const data = snapshot.val();
                resolve(data);

            })
        })
    }
    //Metod för att skriva till Firebase (favorites)
    writeToFavorites(favorites){
        database.ref('users/' + auth.currentUser.uid +'/favorites').set(favorites);
    }

    //Metod för att hämta från Firebase (favorites)
    readFromFavorites(){
        database.ref('users/'+ auth.currentUser.uid +'/favorites').on('value', (snapshot) => {
            const data = snapshot.val();
            this.favorites = JSON.parse(data);
        })
    };
}

const firebasehelper = new FirebaseHelper();

export default firebasehelper;
