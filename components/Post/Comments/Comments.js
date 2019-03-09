import React from 'react';
import {FlatList, View} from 'react-native';

import Comment from './Comment';
import NoComments from './NoComments';
import separator from '../../common/Separator';

export const Comments = ({comments}) => (
    <View>
        <FlatList
            data={comments}
            renderItem={comment => <Comment key={comment.id} comment={comment}/>}
            ListEmptyComponent={<NoComments/>}
            ItemSeparatorComponent={separator}
        />
    </View>
)