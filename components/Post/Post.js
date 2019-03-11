import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Comments} from './Comments';
import {PostHeader} from './PostHeader';
import Separator from '../common/Separator';
import defaultStyles from '../../styles';

export const Post = ({comments, loadingComments, post, onRefresh, refreshingComments}) => (
    <View style={defaultStyles.container}>
        <PostHeader post={post} commentCount={comments.length}/>
        <Separator style={styles.separator}/>
        <Comments comments={comments} loading={loadingComments} onRefresh={onRefresh} refreshing={refreshingComments}/>
    </View>
)

const styles = StyleSheet.create({
    separator: {
        marginTop: 10,
        marginBottom: 10
    }
});
  