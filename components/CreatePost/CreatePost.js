import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Separator from '../common/Separator';
import defaultStyles from '../../styles';

export const CreatePost = ({onPostChange, onTitleChange, post = '', title = ''}) => (
    <View style={[defaultStyles.container, styles.container]}>

        <View style={styles.formField}>
            <TextInput
                style={styles.input}
                onChangeText={onTitleChange}
                value={title}
                placeholder={'Post title'}
            />
        </View>

        <Separator/>
        
        <View style={[styles.formField, styles.multiline]}>
            <TextInput
                style={styles.input}
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
    },
    formField: {
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 15
    },
    multiline: {
        height: '80%'
    },
    input: {
        flex: 1
    },
});