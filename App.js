import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, StatusBar} from 'react-native';
import CustomButton from "./components/CustomButton";
import { firebase } from "./config";

const APP_NAME = "Green Seasons";

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       email: "",
       password: "",
       user: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) 
      {
        // User is signed in.
        this.setState({
          user: user
        })
        alert("in")
        if (!user.emailVerified)
        {
          alert("Please verify email.");
          this.sendUserEmail(user);
        }
      }
      else 
      {
        this.setState({
          user: user
        })
        // No user is signed in.
        alert("out");
      }
    });
  }
  

  LoginClicked = () => {
    const email = this.state.email;
    const password = this.state.password;

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }

  SignupClicked = () => {
    const email = this.state.email;
    const password = this.state.password;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(error);
    });
  }

  SignoutClicked = () => {
    const user = this.state.user;

    if (user !== null)
    {
      firebase.auth().signOut().then(function() {
        alert("Sign-out successful.");
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
        alert(error);
      });
    }
    else
    {
      alert("You're not signed in.");
    }
  }

  handleEmailInput = (value) => {
    this.setState({
      email: value
    })
  }

  handlePasswordInput = (value) => {
    this.setState({
      password: value
    })
  }

  sendUserEmail = (user) => {
    user.sendEmailVerification().then(function () {
      // Email sent.
    }).catch(function (error) {
      // An error happened.
    });
      
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#4b963b" translucent={true}/>
        <Text style={styles.appName}>{APP_NAME}</Text>
        <View style={styles.textInputContainer}>
          <TextInput onChangeText={this.handleEmailInput} placeholder="Email" style={styles.input}/>
          <TextInput onChangeText={this.handlePasswordInput} placeholder="Password" secureTextEntry={true} style={styles.input}/>
        </View>
        <View style={styles.buttonContainer} >
          <CustomButton onPress={this.LoginClicked} textValue="Login"/>
          <CustomButton onPress={this.SignupClicked} textValue="Sign Up"/>
          <CustomButton onPress={this.SignoutClicked} textValue="Sign Out"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  appName: {
    marginTop: 60, 
    color: "white", 
    fontSize: 45, 
    textAlign: "center", 
    fontStyle: "italic"
  },
  input: {
    borderWidth: 2, 
    borderColor: "white", 
    borderRadius: 200,
    backgroundColor: "white",
    paddingLeft: 20,
    fontSize: 20,
    margin: 5
  },
  buttonContainer: {
    flexDirection: "row", 
    width: "90%", 
    justifyContent: "space-evenly", 
    marginTop: 20
  },
  textInputContainer: {
    width: "90%", 
    marginTop: 100
  }
});
