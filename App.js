import {createStackNavigator, createAppContainer} from "react-navigation";

import {PostListContainer} from './components';

const AppNavigator = createStackNavigator({
  Home: {
    screen: PostListContainer
  }
});

export default createAppContainer(AppNavigator);