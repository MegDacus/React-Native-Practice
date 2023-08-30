import React, {useState} from "react";
import { Text, View, StyleSheet, Pressable, TextInput} from 'react-native';

const TextInputScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={styles.text}>Enter Name:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect="false"
                value={name}
                onChangeText={(newValue) => setName(newValue)}/>
            <Text style={styles.secondaryText}>Your name is {name}</Text>
            <Text style={styles.text}>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect="false"
                value={password}
                secureTextEntry="true"
                onChangeText={(newValue) => setPassword(newValue)}/>
            { password.length < 6 ? 
            <Text style={{marginStart: 15, color: 'red'}}>Password must be longer than 5 characters</Text>
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 30,
        fontSize: 25,
        marginStart: 15
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        width: 200,
    },
    secondaryText: {
        fontSize: 20,
        marginStart: 15
    }
})

export default TextInputScreen;