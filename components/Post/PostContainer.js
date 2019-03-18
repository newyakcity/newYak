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

  toggleLoad = (refresh, val) => {
    if(refresh === true) {
      this.setState({refreshingComments: val})
    } else {
      this.setState({loadingComments: val});
    }
  }

  getPostComments = async (refresh) => {
    this.toggleLoad(refresh, true);

    try {
      const post = this.props.navigation.getParam('post');

      const comments = await commentService.getPostComments(post.id);

      this.setState({comments});
    } catch(e) {
      console.log(e);
      alert('Unable to load posts');
    } finally {
      this.toggleLoad(refresh, false);
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
