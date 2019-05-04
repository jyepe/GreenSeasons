import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableNativeFeedback } from 'react-native'

export default class OptionScreen extends Component {

    static navigationOptions = {
        title: "Options"
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={{width: "100%"}}
                    
                    data={[{key: "Add new order"}, {key: 'View previous orders'}]}
                    renderItem={({item}) =>  <TouchableNativeFeedback >
                                                <View style={{borderBottomColor: "#4b963b", 
                                                        borderBottomWidth: 2,
                                                        margin: 5}}>
                                                    <Text style={{fontSize: 20, 
                                                        
                                                        margin: 10,
                                                        color: "black"}}>{item.key}</Text>
                                                </View>
                                            </TouchableNativeFeedback>  }
                />
            </View>
        )
    }
}

// const ListItem = (item) => (
//     <View style={{borderBottomColor: "red"}}>
//         <Text>{item}</Text>
//     </View>
// )

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 25
      }
});