import * as firebase from 'firebase';

var config = {
   apiKey: "AIzaSyC5tvy4teaKAjW2BLk4Q6Fi5tMtTYXWWsQ",
   authDomain: "teamgoals-a204b.firebaseapp.com",
   databaseURL: "https://teamgoals-a204b.firebaseio.com",
   projectId: "teamgoals-a204b",
   storageBucket: "teamgoals-a204b.appspot.com",
   messagingSenderId: "906953960386"
 };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoal')
