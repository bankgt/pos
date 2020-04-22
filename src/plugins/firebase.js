import Vue from "vue";
import firebase from "firebase/app";
import "firebase/database";

Vue.prototype.$db = firebase
  .initializeApp({ databaseURL: "https://line-pos-ad514.firebaseio.com/" })
  .database();
