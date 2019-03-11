import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import defaultStyles, {headerStyle} from '../../styles';

import {PostList} from './PostList';
import {locationService, postService} from '../../services';
import Title from './Title';
import CreatePostButton from './CreatePostButton';

export class PostListContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          posts: []
        }
    }

    static navigationOptions = props => ({
      headerTitle: <Title/>,
      headerRight: <CreatePostButton onClick={() => props.navigation.navigate('CreatePost')}/>,
      headerStyle
    })

    getPosts = async () => {
      try{
        const locationData = await locationService.getLocation();
        
        const {latitude, longitude} = locationData.coords;
        
        const posts = await postService.search(latitude, longitude);

        this.setState({posts});
      } catch(e) {
        console.log(e);
      }
    }

    componentDidMount() {
        this.getPosts();

        this._focusListener = this.props.navigation.addListener('willFocus', this.getPosts);
    }

    componentWillUnmount() {
      this._focusListener.remove();
    }

    navigate = post => this.props.navigation.navigate('Post', {post});

    render() {
        const {posts} = this.state;
    
        return (
          <SafeAreaView style={defaultStyles.container}>
            <PostList posts={posts} onPostClick={this.navigate}/>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({});
