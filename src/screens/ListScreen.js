import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1', age: 21},
        { name: 'Friend 2', age: 22},
        { name: 'Friend 3', age: 23},
        { name: 'Friend 4', age: 20},
        { name: 'Friend 5', age: 30},
        { name: 'Friend 6', age: 25},
        { name: 'Friend 7', age: 23},
        { name: 'Friend 8', age: 22},
        { name: 'Friend 9', age: 28}
    ]


    return (
        <View>
            <FlatList
            keyExtractor={friend => friend.name} 
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.listStyle}>{item.name} - Age {item.age}</Text>
            }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    listStyle: {
        fontSize: 30,
        borderWidth: 1,
        borderColor: "black",
        padding: 20
    }
});

export default ListScreen;