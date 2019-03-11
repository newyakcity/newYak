import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Separator from '../common/Separator';

export const AddComment = ({addComment, onCommentChange, postAuthor, postBody, comment=''}) => (
    <View style={styles.container}>
        <Text>{postAuthor}</Text>
        <Text>{postBody}</Text>

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

        <Separator style={styles.separator}/>

        <View>
            <Button 
                onPress={addComment}
                title='Add Comment'
            />
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    multiline: {
        height: '80%'
    }
})