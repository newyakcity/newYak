import React from 'react';
import {StyleSheet} from 'react-native';
import IconButton from '../common/IconButton';
import {styleConstants} from '../../styles';

export const AddCommentsButton = ({onClick}) => (
    <IconButton
        containerStyle={styles.container}
        buttonStyle={styles.button}
        onClick={onClick}
        icon={{
            name: 'plus',
            size: 28,
            color: styleConstants.palette.white
        }}
    />
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: styleConstants.palette.primary,
        justifyContent: 'center',
        position: 'absolute',

        borderColor: styleConstants.palette.primary,
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