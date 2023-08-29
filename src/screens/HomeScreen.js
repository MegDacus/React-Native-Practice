import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import ListScreen from "./ListScreen";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({navigation}) => {


  return (
    <View>
      <Text style={styles.text}>React Native Practice</Text>
        <Button 
          title="Go to Components Demo"
          onPress={() => navigation.navigate("Components")}/>
          <Button
          title="Go to List Demo" 
          onPress={() => navigation.navigate("List")}/>
          <Button 
          title="Go to Image Demo"
          onPress={() => navigation.navigate("Image")}/>
          <Button 
          title="Go to Counter App"
          onPress={() => navigation.navigate("Counter")}/>
          <Button 
          title="Go to Color Demo"
          onPress={() => navigation.navigate("Color")}/>
           <Button 
          title="Go to Color Adjuster"
          onPress={() => navigation.navigate("ColorAdjuster")}/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 30,
  },
});

export default HomeScreen;

