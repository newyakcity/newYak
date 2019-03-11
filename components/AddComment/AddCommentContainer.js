import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import {AddComment} from './AddComment';
import { postService } from '../../services';
import defaultStyles, {headerStyle} from '../../styles';

export class AddCommentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        }
    }

    static navigationOptions = props => ({
        headerStyle
      })

    addComment = async () => {
        const post = this.props.navigation.getParam('post');

        await postService.addComment(post.id, this.state.comment);

        this.props.navigation.goBack();
    }

    onCommentChange = comment => this.setState({comment})

    render() {
        const post = this.props.navigation.getParam('post');
        const {comment} = this.state;

        return (
            <SafeAreaView style={defaultStyles.container}>
                <AddComment 
                    addComment={this.addComment}
                    onCommentChange={this.onCommentChange}
                    postAuthor={post.author_id}
                    postBody={post.body}
                    comment={comment}
                />
            </SafeAreaView>
        )
    }
}