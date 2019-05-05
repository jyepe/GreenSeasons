import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableNativeFeedback } from 'react-native';
import CustomListItem from '../CustomListItem';
import CustomHeader from '../CustomHeader';

const listItems = [
    {
        key: "Add new order"
    },
    {
        key: "View previous orders"
    }
];

export default class OptionScreen extends Component {

    static navigationOptions = {
        headerTitle: <CustomHeader headerTitle="Options"/>,
        headerStyle: {
            backgroundColor: "green"
        },
        headerTintColor: "white"
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={{width: "100%"}} data={listItems} renderItem={({item}) => <CustomListItem item={item.key}/> }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 25
      }
});