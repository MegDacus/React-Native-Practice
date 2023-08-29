import React, {useState} from "react";
import {View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Pressable style={styles.button} onPress={() => {
                setColors([...colors, randomRgb()])
            }}>
                <Text style={styles.button.text}>Add a Color</Text>
            </Pressable>
            <ScrollView contentContainerStyle={styles.colorContainer}>
                {colors.map((color, index) => {
                    return <View key={index} style={{ height: 100, width: 100, backgroundColor: color, margin: 5 }}/>
                })}
        
            </ScrollView>
        </View>
    )
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
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
        marginVertical: 20
    },
    colorContainer: {
        flexDirection: 'row',  // Arrange items in a row
        flexWrap: 'wrap',      // Allow items to wrap to the next row
        justifyContent: 'center', // Center items horizontally
    },
});

export default ColorScreen;