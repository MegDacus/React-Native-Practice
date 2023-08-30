import React from "react";
import {Text, View, StyleSheet} from 'react-native'

const LayoutScreen = () => {
    return (
        <View>
            <View style={styles.boxView}>
                <Text style={styles.boxText}>Box Screen</Text>
            </View>
            <View style={styles.flexView}>
                <Text style={styles.flexText}>Flex Child #1</Text>
                <Text style={styles.flexText}>Flex Child #2</Text>
                <Text style={styles.flexText}>Flex Child #3</Text>
            </View>
            <View style={styles.positionView}>
                <Text style={styles.positionOneText}>Position 1</Text>
                <Text style={styles.positionTwoText}>Position 2</Text>
                <Text style={styles.positionThreeText}>Position 3</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    boxView: {
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        alignSelf: 'center',
        marginTop: 20
    },
    boxText: {
        margin: 20,
    },
    flexView: {
        height: 200,
        width: 300,
        alignSelf: 'center',
        marginVertical: 20,
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    flexText: {
        borderWidth: 3,
        borderColor: 'red',
    },
    positionView: {
        height: 200,
        width: 300,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'black',
    },
    positionOneText: {
        backgroundColor: 'lightblue',        
        ...StyleSheet.absoluteFillObject
    },
    positionTwoText: {
        backgroundColor: 'lightgreen',
    },
    positionThreeText: {
        backgroundColor: 'lightpink',
    }
}
)

export default LayoutScreen;