import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {Post} from './Post';
import { Comments } from './Comments';
import Separator from '../common/Separator';

export class PostContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          post: props.navigation.getParam('post', null),
          comments: []
        }
    }

    render() {
        const {post, comments} = this.state;

        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              <Post post={post}/>
              <Separator style={styles.separator}/>
              <Comments comments={comments}/>
            </View>
          </SafeAreaView>
        );
    }
}

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