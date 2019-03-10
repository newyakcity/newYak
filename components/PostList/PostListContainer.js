import React, {Component} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

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

    static navigationOptions = navigation => ({
      headerTitle: <Title/>,
      headerRight: <CreatePostButton onClick={() => navigation.navigate('CreatePost')}/>
    })

    async componentDidMount() {
        try{
          const locationData = await locationService.getLocation();
          
          const {latitude, longitude} = locationData.coords;
          
          const posts = await postService.search(latitude, longitude);

          this.setState({posts});
        } catch(e) {
          console.log(e);
        }
    }

    navigate = post => this.props.navigation.navigate('Post', {post});

    render() {
        const {posts} = this.state;
    
        return (
          <SafeAreaView style={styles.container}>
            <PostList posts={posts} onPostClick={this.navigate}/>
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
