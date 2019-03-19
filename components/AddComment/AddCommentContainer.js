import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import {AddComment} from './AddComment';
import Loading from '../common/Loading';

import {commentService} from '../../services';

import defaultStyles from '../../styles';
import { defaultNavigationOptions } from '../../constants';
import NavButton from '../common/NavButton';

export class AddCommentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            loading: false
        }

        this.props.navigation.setParams({saveButton: this.getSaveButton()})

        commentService.eventObserver.subscribe(this.onCommentEvent, this.onCommentError);
    }

    componentWillUnmount(){
        commentService.eventObserver.unsubscribe();
    }

    static navigationOptions = props => ({
        ...defaultNavigationOptions,
        headerRight: props.navigation.getParam('saveButton')
    })

    onCommentEvent = event => {
        if(event.type === commentService.eventTypes.addCommentComplete) {
            this.setState({loading: false});

            comment && this.props.navigation.goBack();
        }
    }

    onCommentError = error => {
        console.log(error);
        
        this.setState({loading: false});

        alert('Unable to save your comment. Please try again.')
    }

    getSaveButton = () => (<NavButton onClick={this.addComment} icon='paper-plane'/>)

    addComment = () => {
        this.setState({loading: true});

        const post = this.props.navigation.getParam('post');

        commentService.addComment(post.id, this.state.comment);
    }

    onCommentChange = comment => this.setState({comment})

    render() {
        const post = this.props.navigation.getParam('post');
        const {comment, loading} = this.state;

        return (
            <SafeAreaView style={defaultStyles.container}>
                <Loading loading={loading}/>
                {!loading && 
                    <AddComment
                        onCommentChange={this.onCommentChange}
                        postAuthor={post.username.username}
                        postBody={post.body}
                        comment={comment}
                    />
                }
            </SafeAreaView>
        )
    }
}