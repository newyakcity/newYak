import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {postService} from '../../services';

export const PostHeader = ({post: {username: {username}, body, created_at, title}, commentCount}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.author}>{username}</Text>
            <Text>{postService.formatDate(created_at)}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.body}>{body}</Text>

        <Text>{commentCount} comments</Text>
    </View>
)

const styles = StyleSheet.create({
    author: {
        marginRight: 10
    },
    body: {
        fontSize: 18,
        marginBottom: 15
    },
    container: {
        padding: 10
    },
    header: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    }
})