import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageCard = ({title, imageSource, score}) => {
    return (
        <View style={styles.card}>
            <Image source={imageSource}/>
            <View style={styles.textContainer}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
                <Text>Image Score - {score}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginBottom: 10
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ImageCard;