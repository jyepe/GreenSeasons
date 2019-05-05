import React from 'react';
import { Text, View } from 'react-native';

export default CustomHeader = (props) => (
    <View style={{flex: 1, flexDirection: "row", borderColor: "red", borderWidth: 2}}>
        <Text style={{color: "white"}}>{props.headerTitle}</Text>
        <Text style={{color: "white"}}>Sign Out</Text>
    </View>
)