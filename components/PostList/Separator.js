import React from 'react';

import {StyleSheet, View} from 'react-native';

export default () => (
    <View style={styles.separator}></View>
)

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
})