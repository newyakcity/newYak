import React from 'react';
import {StyleSheet} from 'react-native';
import IconButton from '../common/IconButton';

export default ({onClick}) => (
    <IconButton
        onClick={onClick}
        icon={{
            name: 'edit',
            size: 28,
            color: '#FFFFFF'
        }}
        containerStyle={styles.iconView}
    />
)

const styles = StyleSheet.create({
    iconView: {
        marginRight: 15
    }
});