import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Post} from './Post';
import {postService} from '../../services';
import defaultStyles, {headerStyle} from '../../styles';

export class PostContainer extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        comments: []
      }
  }

  static navigationOptions = props => ({
    headerStyle
  })

  addCommentClick = () => this.props.navigation.navigate('AddComment', {
    post: this.props.navigation.getParam('post')
  })

  getPostComments = async () => {
    const post = this.props.navigation.getParam('post');

    const comments = await postService.getPostComments(post.id);

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
    const post = this.props.navigation.getParam('post');
    const {comments} = this.state;

    return (
      <SafeAreaView style={{...defaultStyles.container, ...styles.container}}>
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
      padding: 10
  }
});
