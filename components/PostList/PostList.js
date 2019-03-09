import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';

import NoPosts from './NoPosts';
import PostItem from './PostItem';
import separator from './Separator';

export const PostList = ({posts, onPostClick}) => (
    <View style={styles.container}>
        <FlatList
            data={posts}
            renderItem={post => <PostItem key={post.item.id} post={post.item} onClick={() => onPostClick(post.item.id)}/>}
            ListEmptyComponent={<NoPosts/>}
            ItemSeparatorComponent={separator}
        /> 
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});