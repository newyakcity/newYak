import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import Separator from '../common/Separator';

export const CreatePost = ({onPostChange, onTitleChange, savePost, post = '', title = ''}) => (
    <View style={styles.container}>

        <View style={styles.formField}>
            <TextInput
                onChangeText={onTitleChange}
                value={title}
                placeholder={'Post title'}
            />
        </View>

        <Separator style={styles.separator}/>
        
        <View style={{...styles.formField, ...styles.multiline}}>
            <TextInput
                maxLength={1000}
                multiline={true}
                numberOfLines={10}
                onChangeText={onPostChange}
                value={post}
                placeholder={'Great post about stuff'}
            />
        </View>

        <Separator style={styles.separator}/>

        <View style={styles.button}>
            <Button 
                onPress={savePost}
                title='Create Post'
            />
        </View>
    </View>
)

const styles = StyleSheet.create({
    button: {},
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        flexDirection: 'column',
        fontSize: 18,
        padding: 10,
        paddingTop: 20
    },
    formField: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    multiline: {
        height: '80%'
    },
    separator: {
        marginBottom: 15
    }
});