import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Post} from './Post';
import {postService} from '../../services';

export class PostContainer extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        post: props.navigation.getParam('post', null),
        comments: []
      }
  }

  async componentDidMount() {
    const comments = await postService.getPostComments(this.state.post.id);

    this.setState({comments});
  }

  render() {
    const {post, comments} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Post post={post} comments={comments}/>
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
