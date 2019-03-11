import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import defaultStyles, {styleConstants} from '../../styles';

export default ({loading}) => loading && (
    <View style={[defaultStyles.container, styles.container]}>
        <ActivityIndicator
            animating={loading}
            color={styleConstants.palette.primary}
            hidesWhenStopped={true}
            size="large"
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})