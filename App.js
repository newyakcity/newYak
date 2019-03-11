import {createStackNavigator, createAppContainer} from "react-navigation";

import {
  AddCommentContainer,
  CreatePostContainer,
  PostListContainer, 
  PostContainer
} from './components';

const AppNavigator = createStackNavigator({
  Home: {
    screen: PostListContainer
  },
  AddComment: {
    screen: AddCommentContainer
  },
  CreatePost: {
    screen: CreatePostContainer
  },
  Post: {
    screen: PostContainer
  }
});

export default createAppContainer(AppNavigator);