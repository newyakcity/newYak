import React from 'react';
import {StyleSheet} from 'react-native';
import IconButton from '../common/IconButton';
import { styleConstants } from '../../styles';

export default ({onClick}) => (
    <IconButton
        onClick={onClick}
        icon={{
            name: 'edit',
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
});