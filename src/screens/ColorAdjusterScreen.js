import React, {useState} from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import ColorCard from "../components/ColorCard";

const COLOR_INCREMENT = 15

const ColorAdjusterScreen = () => {
    const [ red, setRed ] = useState(0);
    const [ green, setGreen ] = useState(0);
    const [ blue, setBlue ] = useState(0);

    const setColor = (color, change) => {
        // color === 'red, 'green', 'blue
        // change === +15, -15

        switch (color) {
            case 'red': 
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }

    return (
        <View>
            <Text style={styles.text}>Color Adjuster</Text>
            <ColorCard colorName="Red" onIncrease={() => setColor('red', COLOR_INCREMENT)} onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} />
            <ColorCard colorName="Green" onIncrease={() => setColor('green', COLOR_INCREMENT)} onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}/>
            <ColorCard colorName="Blue" onIncrease={() => setColor('blue', COLOR_INCREMENT)} onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}/>
            <View style={{ alignSelf: 'center', height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`, marginTop: COLOR_INCREMENT }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        fontWeight: 'bold',
        color: "lightblue",
        textAlign: "center",
        marginVertical: 20,
    }
});

export default ColorAdjusterScreen;