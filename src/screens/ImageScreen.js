import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import ImageCard from '../components/ImageCard';
import BeachImage from '../../assets/images/beach.jpg';
import MountainImage from '../../assets/images/mountain.jpg'
import ForestImage from '../../assets/images/forest.jpg'

const ImageScreen = () => {
    return (
        <View>
            <ImageCard title="Forest" imageSource={ForestImage} score={8}/>
            <ImageCard title="Beach" imageSource={BeachImage} score={10}/>
            <ImageCard title="Mountain" imageSource={MountainImage} score={9}/>
        </View>
)}

const styles = StyleSheet.create({})

export default ImageScreen;