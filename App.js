import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { locationService, postService } from './services';

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
    return (
      <View style={styles.container}>
        {this.state.posts.map(post => {
          <Text key={post.id}>
            {post.title}
          </Text>
        })}
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
