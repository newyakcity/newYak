import React from 'react';

import {FlatList, StyleSheet, Text, View} from 'react-native';

import PostItem from './PostItem';

export const PostList = ({posts}) => (
    <View style={styles.container}>
        {posts.length ? 
        <FlatList
            data={posts}
            renderItem={post => <PostItem key={post.item.id} post={post.item}/>}
        /> : 
        <Text>
            No posts yet.
        </Text>  
        }
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});
  