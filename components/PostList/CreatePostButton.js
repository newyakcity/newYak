import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({onClick}) => (
    <TouchableHighlight onPress={onClick}>
        <View>
            <Icon name="edit">
                <Text>Create a post</Text>
            </Icon>
        </View>
    </TouchableHighlight>
)