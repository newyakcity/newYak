import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Comments} from './Comments';
import {PostHeader} from './PostHeader';
import {AddCommentsButton} from './AddCommentsButton';
import Separator from '../common/Separator';

export const Post = ({post, comments}) => (
    <View style={styles.container}>
        <PostHeader post={post}/>
        <Separator style={styles.separator}/>
        <Comments comments={comments}/>
        <AddCommentsButton onClick={() => {}}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        padding: 10
    },
    separator: {
        marginTop: 10,
        marginBottom: 10
    }
});
  