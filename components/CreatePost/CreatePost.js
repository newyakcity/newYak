import React from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import Separator from '../common/Separator';
import defaultStyles, { styleConstants } from '../../styles';

export const CreatePost = ({onPostChange, onTitleChange, savePost, post = '', title = ''}) => (
    <View style={{...defaultStyles.container, ...styles.container}}>

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
    </View>
)

const styles = StyleSheet.create({
    container: {
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