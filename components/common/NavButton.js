import React from 'react';
import {StyleSheet} from 'react-native';

import IconButton from './IconButton';

import {styleConstants} from '../../styles';

export default ({onClick, icon}) => (
    <IconButton
        onClick={onClick}
        icon={{
            name: icon,
            size: 28,
            color: styleConstants.palette.white
        }}
        containerStyle={styles.iconView}
    />
)

const styles = StyleSheet.create({
    iconView: {
        marginRight: 15
    }
})