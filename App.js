import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {locationService, postService} from './services';

import {PostList} from './components';

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
      <SafeAreaView style={styles.container}>
        <PostList posts={posts}/>
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
