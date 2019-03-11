import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Post} from './Post';
import {postService} from '../../services';
import defaultStyles, {styleConstants} from '../../styles';
import { defaultNavigationOptions } from '../../constants';
import IconButton from '../common/IconButton';

export class PostContainer extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        comments: [],
        loadingComments: false
      }
  }

  static navigationOptions = props => ({
    ...defaultNavigationOptions,
    headerRight: (
      <IconButton
        onClick={() => {
          props.navigation.navigate('AddComment', {
            post: props.navigation.getParam('post')
          })
        }}
        icon={{
            name: 'plus',
            size: 28,
            color: styleConstants.palette.white
        }}
        containerStyle={styles.iconView}
      />
    )
  })

  getPostComments = async () => {
    this.setState({loadingComments: true});

    try {
      const post = this.props.navigation.getParam('post');

      const comments = await postService.getPostComments(post.id);

      this.setState({comments});
    } catch(e) {
      alert('Unable to load posts');
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
  },
  iconView: {
    marginRight: 10
  }
});
