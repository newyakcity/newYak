import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import defaultStyles from '../../styles';

import {PostList} from './PostList';
import {locationService, postService} from '../../services';
import Title from './Title';
import CreatePostButton from './CreatePostButton';
import { defaultNavigationOptions } from '../../constants';
import Loading from '../common/Loading';

export class PostListContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          posts: []
        }
    }

    static navigationOptions = props => ({
      headerTitle: <Title/>,
      headerRight: <CreatePostButton onClick={() => props.navigation.navigate('CreatePost')}/>,
      ...defaultNavigationOptions
    })

    getPosts = async () => {
      try{
        this.setState({loading: true});

        const locationData = await locationService.getLocation();
        
        const {latitude, longitude} = locationData.coords;
        
        const posts = await postService.search(latitude, longitude);

        this.setState({posts});
      } catch(e) {
        console.log(e);
      } finally {
        this.setState({loading: false});
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
        const {loading, posts} = this.state;
    
        return (
          <SafeAreaView style={defaultStyles.container}>
              <Loading loading={loading}/> 
              {!loading && 
                <PostList posts={posts} onPostClick={this.navigate} loading={loading}/>
              }
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({});
