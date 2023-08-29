import React, {useState} from "react";
import {View, Text, StyleSheet, Button, Pressable} from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Pressable style={styles.button} onPress={() => {setCounter( counter + 1);}}>
                <Text style={styles.button.text}>Increase</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => {setCounter( counter - 1);}}>
                <Text style={styles.button.text}>Decrease</Text>
            </Pressable>
            <Text style={styles.text}>Current Count: {counter}</Text>
            <Pressable  onPress={() => {setCounter(0)}}>
                <Text style={styles.button.reset}>Reset</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: "center",
        marginVertical: 10
    },
    button: {
        text: {
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
        },
        reset: {
            alignSelf: "center",
            fontSize: 16,
            fontWeight: "bold",
        },
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'lightblue',
        width: 200,
        alignSelf: "center",
        marginVertical: 5
    }
})

export default CounterScreen;