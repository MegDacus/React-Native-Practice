import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const ColorCard = ({colorName, onIncrease, onDecrease}) => {
    return (
        <View style={{marginVertical: 5}}>
            <Text style={styles.text}>{colorName}</Text>
            <Pressable onPress={() => onIncrease()} style={styles.button}>
                <Text style={styles.button.text}>Increase {colorName}</Text>
            </Pressable>
            <Pressable onPress={() => onDecrease()} style={styles.button}>
                <Text style={styles.button.text}>Decrease {colorName}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        textAlign: "center"
    },
    button: {
        text: {
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
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
});

export default ColorCard;