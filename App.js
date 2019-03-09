import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {locationService, postService} from './services';

import {PostItem} from './components';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    }
  }

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

  render() {
    const {posts} = this.state;

    return (
      <View style={styles.container}>
        {posts.length ? 
          <FlatList
            data={posts}
            renderItem={post => <PostItem key={post.item.id} post={post.item}/>}
          /> : 
          <Text>
            No posts yet.
          </Text>  
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
