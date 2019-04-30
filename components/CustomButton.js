import React from 'react';
import { TouchableNativeFeedback, View, Text, StyleSheet } from 'react-native';

export default CustomButton = (props) => (
    <TouchableNativeFeedback onPress={props.onPress}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.textValue}</Text>
        </View>
    </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
    textContainer: {
        borderRadius: 25, 
        width: "35%", 
        justifyContent: "center",
        backgroundColor: "white",
        elevation: 1,
        height: 50
    },
    text: {
        textAlign: "center", 
        color: "green", 
        height: 20, 
        fontWeight: "bold",
        fontSize: 15
    }
});