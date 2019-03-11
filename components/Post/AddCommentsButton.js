import React from 'react';
import {StyleSheet} from 'react-native';
import IconButton from '../common/IconButton';

export const AddCommentsButton = ({onClick}) => (
    <IconButton
        containerStyle={styles.container}
        buttonStyle={styles.button}
        onClick={onClick}
        icon={{
            name: 'plus',
            size: 28,
            color: '#FFFFFF'
        }}
    />
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        position: 'absolute',

        borderColor: '#007AFF',
        borderRadius: 100,
        borderWidth:1,

        bottom: 15,
        right: 25,
        
        height: 50,
        width: 50,
    },
    button: {
        
        justifyContent: 'center',
        textAlign: 'center'
    }
})