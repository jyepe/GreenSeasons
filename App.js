import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, StatusBar} from 'react-native';
import CustomButton from "./components/CustomButton";

const APP_NAME = "Green Seasons";

export default class App extends Component {

  LoginClicked = () => {
    alert("clicked");
  }

  SignupClicked = () => {
    alert("clicked");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#4b963b" translucent={true}/>
        <Text style={styles.appName}>{APP_NAME}</Text>
        <View style={{width: "90%", marginTop: 100}}>
          <TextInput placeholder="Username" style={styles.input}/>
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.input}/>
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
  }
});
