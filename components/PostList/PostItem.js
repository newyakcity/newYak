import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {postService} from '../../services';

export default ({post, onClick}) => (
    <TouchableHighlight onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>{post.title}</Text>
                <Text>{postService.formatDate(post.created_at)}</Text>
            </View>

            <Text style={styles.body}>{postService.getShortenedBody(post.body)}</Text>

            <Text>{post.comments_count} comments</Text>
        </View>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    body: {
        maxWidth: '85%',
        marginBottom: 15
    },
    container: {
        padding: 10
    },
    header: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10
    }
});