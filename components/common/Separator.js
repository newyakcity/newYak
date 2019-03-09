import React from 'react';

import {StyleSheet, View} from 'react-native';

export default ({style: additionalStyles}) => (
    <View style={{...styles.separator, ...additionalStyles}}></View>
)

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})