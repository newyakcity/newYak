import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Comments} from './Comments';
import {PostHeader} from './PostHeader';
import Separator from '../common/Separator';
import defaultStyles from '../../styles';

export const Post = ({comments, loadingComments, post}) => (
    <View style={[defaultStyles.container, styles.container]}>
        <PostHeader post={post} commentCount={comments.length}/>
        <Separator style={styles.separator}/>
        <Comments comments={comments} loading={loadingComments}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    separator: {
        marginTop: 10,
        marginBottom: 10
    }
});
  