import Firebase from 'firebase'; 
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBjDLgzWf9sHQNdxXmZuRpbHDyN3bAhqjU",
    authDomain: "greenseasons-7de90.firebaseapp.com",
    databaseURL: "https://greenseasons-7de90.firebaseio.com",
    projectId: "greenseasons-7de90",
    storageBucket: "greenseasons-7de90.appspot.com",
    messagingSenderId: "109916467060"
  };

let app = Firebase.initializeApp(config);
export const firebase = app;

//db.ref('/items').push("test");
    // let itemsRef = db.ref('/items');
    // itemsRef.on('value', snapshot => {
    //   let data = snapshot.val();
    //   let items = Object.values(data);
    //   alert(items);
    // });