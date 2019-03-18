import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Post} from './Post';
import {commentService} from '../../services';
import defaultStyles from '../../styles';
import { defaultNavigationOptions } from '../../constants';
import NavButton from '../common/NavButton';

export class PostContainer extends Component {
  constructor(props) {
      super(props);
  
      this.state = {
        comments: [],
        loadingComments: false,
        refreshingComments: false,
      }

      commentService.collectionObserver
        .subscribe(comments => this.toggleLoad(this.state.refreshingComments, false, {comments}))
  }

  componentWillUnmount() {
    commentService.collectionObserver.unsubscribe();
  }

  static navigationOptions = props => ({
    ...defaultNavigationOptions,
    headerRight: (
      <NavButton icon='plus' onClick={() => {
        props.navigation.navigate('AddComment', {
          post: props.navigation.getParam('post')
        })
      }}/>
    )
  })

  toggleLoad = (refresh, val, extras = {}) => {
    if(refresh === true) {
      this.setState({refreshingComments: val, ...extras})
    } else {
      this.setState({loadingComments: val, ...extras});
    }
  }

  getPostComments = async (refresh) => {
    try {
      this.toggleLoad(refresh, true);

      const post = this.props.navigation.getParam('post');

      commentService.getPostComments(post.id);
    } catch(e) {
      console.log(e);
      alert('Unable to load posts');
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
    const {comments, loadingComments, refreshingComments} = this.state;

    return (
      <SafeAreaView style={{...defaultStyles.container, ...styles.container}}>
        <Post 
          addCommentClick={this.addCommentClick}
          comments={comments}
          loadingComments={loadingComments}
          post={post}
          onRefresh={this.getPostComments.bind(this, true)}
          refreshingComments={refreshingComments}
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
