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

  addCommentClick = () => this.props.navigation.navigate('AddComment', {id: this.state.post.id})

  getPostComments = async () => {
    const comments = await postService.getPostComments(this.state.post.id);

    this.setState({comments});
  }

  componentDidMount() {
    this.getPostComments();

    this._focusListener = this.props.navigation.addListener('willFocus', this.getPostComments);
  }

  componentWillUnmount() {
    this._focusListener.remove();
  }

  render() {
    const {post, comments} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Post 
          addCommentClick={this.addCommentClick}
          comments={comments}
          post={post}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#F5FCFF',
      flex: 1,
      padding: 10
  }
});
