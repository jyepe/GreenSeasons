import React from 'react'
import { Text, View, TouchableNativeFeedback, StyleSheet } from 'react-native'

export default CustomListItem = (props) => (
    <TouchableNativeFeedback>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.item}</Text>
        </View>
    </TouchableNativeFeedback>
)

const styles = StyleSheet.create({
    textContainer: {
        borderBottomColor: "#4b963b", 
        borderBottomWidth: 2,
        margin: 5
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: "black"
    }
});