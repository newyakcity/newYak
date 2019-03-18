import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

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
          refreshing: false,
          posts: []
        }

        postService.collectionObserver
          .subscribe(posts => this.toggleLoad(this.state.refreshing, false, {posts}));
    }

    componentWillUnmount() {
      postService.collectionObserver.unsubscribe();
    }

    static navigationOptions = props => ({
      headerTitle: <Title/>,
      headerRight: <CreatePostButton onClick={() => props.navigation.navigate('CreatePost')}/>,
      ...defaultNavigationOptions
    })

    toggleLoad = (refresh, val, extras = {}) => {
      if(refresh === true) {
        this.setState({refreshing: val, ...extras})
      } else {
        this.setState({loading: val, ...extras});
      }
    }

    getPosts = async refresh => {
      try{
        this.toggleLoad(refresh, true);

        const locationData = await locationService.getLocation();
        
        const {latitude, longitude} = locationData.coords;
        
        postService.search(latitude, longitude);
      } catch(e) {
        this.toggleLoad(refresh, false);

        alert('Unable to retrieve posts. Please try again.');
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
        const {loading, posts, refreshing} = this.state;
    
        return (
          <SafeAreaView style={defaultStyles.container}>
              <Loading loading={loading}/> 
              {!loading && 
                <PostList 
                  posts={posts} 
                  onPostClick={this.navigate} 
                  onRefresh={this.getPosts.bind(this, true)}
                  refreshing={refreshing}
                />
              }
          </SafeAreaView>
        );
    }
}