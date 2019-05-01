import Firebase from 'firebase'; 
  // Initialize Firebase
  

let app = Firebase.initializeApp(config);
export const firebase = app;

//db.ref('/items').push("test");
    // let itemsRef = db.ref('/items');
    // itemsRef.on('value', snapshot => {
    //   let data = snapshot.val();
    //   let items = Object.values(data);
    //   alert(items);
    // });