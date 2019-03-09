import {createStackNavigator, createAppContainer} from "react-navigation";

import {PostListContainer, PostContainer} from './components';

const AppNavigator = createStackNavigator({
  Home: {
    screen: PostListContainer
  },
  Post: {
    screen: PostContainer
  }
});

export default createAppContainer(AppNavigator);