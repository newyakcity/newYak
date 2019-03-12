import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Separator from '../common/Separator';

import defaultStyles from '../../styles';

export const AddComment = ({onCommentChange, postAuthor, postBody, comment=''}) => (
    <View style={{...defaultStyles.container, ...styles.container}}>
        <View style={styles.paddedContainer}>
            <Text>{postAuthor}</Text>
            <Text style={styles.body}>{postBody}</Text>
        </View>

        <Separator/>

        <View style={styles.paddedContainer}>
            <TextInput
                style={styles.input}
                maxLength={1000}
                multiline
                numberOfLines={10}
                onChangeText={onCommentChange}
                value={comment}
                placeholder={'Great post about stuff'}
                style={styles.multiline}
            />
        </View>
    </View>
)

const styles = StyleSheet.create({
    body: {
        marginTop: 10,
        marginBottom: 20
    },
    container: {
        fontSize: 16
    },
    paddedContainer: {
        padding: 10
    },
    input: {
        flex: 1
    },
    multiline: {
        height: '80%'
    }
})