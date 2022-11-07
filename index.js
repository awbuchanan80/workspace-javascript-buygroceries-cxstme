// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyAzcwgZuLA7dO9g4sQhXQVTUgCo0M8m2qM",
  authDomain: "grocerylist-91956.firebaseapp.com",
  databaseURL: "https://grocerylist-91956.firebaseio.com",
  projectId: "grocerylist-91956",
  storageBucket: "grocerylist-91956.appspot.com",
  messagingSenderId: "813812426276",
  appId: "1:813812426276:web:93e5897af12892ff78dab1",
  measurementId: "G-VZ83BTR72T"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value//?
    });


  });

});
