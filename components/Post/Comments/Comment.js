import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { postService } from '../../../services';

export default ({comment}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text>{comment.username.username}</Text>
            <Text>{postService.formatDate(comment.created_at)}</Text>
        </View>

        <Text style={styles.body}>{comment.body}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginTop: 10
    },
    body: {
        marginBottom: 5
    }
})