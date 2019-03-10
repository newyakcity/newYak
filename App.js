import {createStackNavigator, createAppContainer} from "react-navigation";

import {PostListContainer, PostContainer, CreatePostContainer} from './components';

const AppNavigator = createStackNavigator({
  Home: {
    screen: PostListContainer
  },
  CreatePost: {
    screen: CreatePostContainer
  },
  Post: {
    screen: PostContainer
  }
});

export default createAppContainer(AppNavigator);