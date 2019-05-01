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
      alert(errorMessage);
    });
    
    this.sendUserEmail();
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

  sendUserEmail = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        user.sendEmailVerification().then(function () {
          // Email sent.
        }).catch(function (error) {
          // An error happened.
        });
      }
      else {
        // No user is signed in.
      }
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
