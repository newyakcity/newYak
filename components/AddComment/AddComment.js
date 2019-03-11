import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Separator from '../common/Separator';

import defaultStyles, { styleConstants } from '../../styles';

export const AddComment = ({addComment, onCommentChange, postAuthor, postBody, comment=''}) => (
    <View style={{...defaultStyles.container, ...styles.container}}>

        <Text>{postAuthor}</Text>
        <Text style={styles.body}>{postBody}</Text>

        <Separator/>

        <TextInput
            maxLength={1000}
            multiline
            numberOfLines={10}
            onChangeText={onCommentChange}
            value={comment}
            placeholder={'Great post about stuff'}
            style={styles.multiline}
        />
    </View>
)

const styles = StyleSheet.create({
    body: {
        marginTop: 10,
        marginBottom: 20
    },
    container: {
        fontSize: 16,
        padding: 10
    },
    multiline: {
        height: '80%'
    }
})