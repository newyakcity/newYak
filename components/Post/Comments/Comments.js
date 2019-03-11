import React from 'react';
import {FlatList, View} from 'react-native';

import Comment from './Comment';
import NoComments from './NoComments';
import Loading from '../../common/Loading';
import separator from '../../common/Separator';

export const Comments = ({comments, loading, onRefresh, refreshing}) => (
    <View>
        <Loading loading={loading}/>
        {!loading && 
            <FlatList
                data={comments}
                renderItem={comment => <Comment key={comment.item.id} comment={comment.item}/>}
                ListEmptyComponent={<NoComments/>}
                ItemSeparatorComponent={separator}
                onRefresh={onRefresh}
                refreshing={refreshing}
            />
        }
    </View>
)
