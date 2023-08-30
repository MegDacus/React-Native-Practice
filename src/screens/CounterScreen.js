import React, {useReducer} from "react";
import {View, Text, StyleSheet, Button, Pressable} from "react-native";

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increase' || 'decrease', payload: 1 }
    
    switch (action.type) {
        case 'increase': 
        // leaving ...count to future proof incase eventually more items are added to the object
            return { ...state, count: state.count + action.payload }
        case 'decrease':
            return { ...state, count: state.count - action.payload }
        case 'reset':
            return { ...state, count: 0}
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Pressable style={styles.button} onPress={() => dispatch( {type: 'increase', payload: 1} )}>
                <Text style={styles.button.text}>Increase</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => dispatch({type: 'decrease', payload: 1} )}>
                <Text style={styles.button.text}>Decrease</Text>
            </Pressable>
            <Text style={styles.text}>Current Count: {state.count}</Text>
            <Pressable  onPress={() => dispatch({ type: 'reset' })}>
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