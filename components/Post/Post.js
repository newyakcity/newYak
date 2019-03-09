import React from 'react';
import {View} from 'react-native';

import {PostHeader} from './PostHeader';

export const Post = ({post}) => (
    <View>
        <PostHeader post={post}/>
    </View>
)