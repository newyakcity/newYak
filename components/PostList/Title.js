import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default () => <Text style={styles.title}>NewYak</Text>

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});