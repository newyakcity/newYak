import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Post} from './Post';
import {postService} from '../../services';
import defaultStyles from '../../styles';
import { defaultNavigationOptions } from '../../constants';

export class PostContainer extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        comments: [],
        loadingComments: false
      }
  }

  static navigationOptions = props => ({
    ...defaultNavigationOptions
  })

  addCommentClick = () => this.props.navigation.navigate('AddComment', {
    post: this.props.navigation.getParam('post')
  })

  getPostComments = async () => {
    this.setState({loadingComments: true});

    try {
      const post = this.props.navigation.getParam('post');

      const comments = await postService.getPostComments(post.id);

      this.setState({comments});
    } catch(e) {
      console.log(e);
    } finally {
      this.setState({loadingComments: false});
    }
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
    const {comments, loadingComments} = this.state;

    return (
      <SafeAreaView style={{...defaultStyles.container, ...styles.container}}>
        <Post 
          addCommentClick={this.addCommentClick}
          comments={comments}
          loadingComments={loadingComments}
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
