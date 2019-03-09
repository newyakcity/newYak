import {createStackNavigator, createAppContainer} from "react-navigation";

import {PostListContainer, Post} from './components';

const AppNavigator = createStackNavigator({
  Home: {
    screen: PostListContainer
  },
  Post: {
    screen: Post
  }
});

export default createAppContainer(AppNavigator);