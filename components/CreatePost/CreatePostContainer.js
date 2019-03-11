import React, {Component} from 'react';
import {NavigationActions, StackActions} from 'react-navigation';
import {SafeAreaView, StyleSheet} from 'react-native';

import {CreatePost} from './CreatePost';
import Loading from '../common/Loading';

import {locationService, postService} from '../../services';

import defaultStyles from '../../styles';
import { defaultNavigationOptions } from '../../constants';

export class CreatePostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            loading: false
        }
    }

    static navigationOptions = props => ({
        ...defaultNavigationOptions
    })

    savePost = async () => {
        this.setState({loading: true});

        try {
            const locationData = await locationService.getLocation();

            const post = await postService.createPost({...this.state}, locationData.coords);
            
            const resetAction = StackActions.reset({
                index: 0, 
                actions: [NavigationActions.navigate({ routeName: 'Home' })]
            })
            
            this.props.navigation.dispatch(resetAction);
            this.props.navigation.navigate('Post', {post});
        } catch(e) {
            console.log(e);
        } finally{
            this.setState({loading: false});
        }
    }

    render() {
        const {body, title, loading} = this.state;

        return (
            <SafeAreaView style={{...defaultStyles.container, ...styles.container}}>
                <Loading loading={loading}/>
                {!loading && 
                    <CreatePost 
                        onPostChange={body => this.setState({body})}
                        onTitleChange={title => this.setState({title})}
                        savePost={this.savePost}
                        post={body}
                        title={title} 
                    />
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});