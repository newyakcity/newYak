import React from 'react';
import {TouchableHighlight, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({onClick}) => (
    <TouchableHighlight onPress={onClick} style={styles.iconView}>
        <View>
            <Icon name="edit" size={28} color="#007aff"></Icon>
        </View>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    iconView: {
        marginRight: 15
    }
})