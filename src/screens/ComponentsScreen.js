import React from 'react';
import { Text , StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = "Megan";

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.secondTextStyle}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        margin: 20
    },
    secondTextStyle: {
        fontSize: 15,
        margin: 5
    }
});

export default ComponentsScreen;