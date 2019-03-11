import React, {Component} from 'react';
import {AddComment} from './AddComment';
import { postService } from '../../services';

export class AddCommentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        }
    }

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
            <AddComment 
                addComment={this.addComment}
                onCommentChange={this.onCommentChange}
                postAuthor={post.authorId}
                postBody={post.body}
                comment={comment}
            />
        )
    }
}