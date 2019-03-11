import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {postService} from '../../services';

export const PostHeader = ({post: {username: {username}, body, created_at, title}, commentCount}) => (
    <View>
        <View style={styles.dateContainer}>
            <Text>{postService.formatDate(created_at)}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.body}>{body}</Text>

        <Text style={styles.author}>By {username}</Text>

        <Text>{commentCount} comments</Text>
    </View>
)

const styles = StyleSheet.create({
    author: {
        marginBottom: 5
    },
    body: {
        fontSize: 18,
        marginBottom: 20
    },
    dateContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        marginBottom: 10
    }
})