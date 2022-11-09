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
  apiKey: 'AIzaSyDmco00TLPSwg2W92DgkGrDez3xDj7ujxs',
  authDomain: 'testproject-grocerylist.firebaseapp.com',
  projectId: 'testproject-grocerylist',
  storageBucket: 'testproject-grocerylist.appspot.com',
  messagingSenderId: '118044542649',
  appId: '1:118044542649:web:80f68a6dd3bc44ffd6fd68',
  measurementId: 'G-2CV1D4J604',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content
  $(this).text('saved');
  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('mylist').add({
      item: value,
    });

    firebase.firestore().collection('otherlist').add({
      item: 'bananas',
    });
  });
});
