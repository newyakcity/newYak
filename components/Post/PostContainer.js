import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Post} from './Post';

export class PostContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          post: props.navigation.getParam('post', null)
        }
    }

    render() {
        const {post} = this.state;
        {}
        return (
          <SafeAreaView style={styles.container}>
            <Post post={post}/>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    }
});
