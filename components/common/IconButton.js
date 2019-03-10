import React from 'react';
import {TouchableHighlight, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({onClick, icon: {name, color, size}, buttonStyle}) => (
    <TouchableHighlight onPress={onClick} style={buttonStyle}>
        <View>
            <Icon name={name} size={size} color={color}></Icon>
        </View>
    </TouchableHighlight>
)
