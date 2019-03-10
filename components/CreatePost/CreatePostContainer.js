import React, {Component} from 'react';
import {NavigationActions, StackActions} from 'react-navigation';
import {SafeAreaView, StyleSheet} from 'react-native';

import {CreatePost} from './CreatePost';
import {locationService, postService} from '../../services';

export class CreatePostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: ''
        }
    }

    savePost = async () => {
        const locationData = await locationService.getLocation();

        const post = await postService.createPost({...this.state}, locationData.coords);
        
        const resetAction = StackActions.reset({
            index: 0, 
            actions: [NavigationActions.navigate({ routeName: 'Home' })]
        })
        
        this.props.navigation.dispatch(resetAction);
        this.props.navigation.navigate('Post', {post});
    }

    render() {
        const {body, title} = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <CreatePost 
                    onPostChange={body => this.setState({body})}
                    onTitleChange={title => this.setState({title})}
                    savePost={this.savePost}
                    post={body}
                    title={title} 
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        padding: 10
    }
});