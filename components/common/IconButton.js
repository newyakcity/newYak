import React from 'react';
import {TouchableHighlight, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({onClick, icon: {name, color, size}, buttonStyle, containerStyle}) => (
    <TouchableHighlight onPress={onClick} style={containerStyle}>
        <View style={buttonStyle}>
            <Icon name={name} size={size} color={color}></Icon>
        </View>
    </TouchableHighlight>
)
