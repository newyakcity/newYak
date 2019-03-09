import React from 'react';

import {Text, View} from 'react-native';

export const Post = ({navigation}) => (
    <View>
        <Text>{navigation.getParam('id', false)}</Text>
    </View>
)