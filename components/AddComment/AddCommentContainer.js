import React, {Component} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {AddComment} from './AddComment';
import Loading from '../common/Loading';
import IconButton from '../common/IconButton';

import { postService } from '../../services';

import defaultStyles, {styleConstants} from '../../styles';
import { defaultNavigationOptions } from '../../constants';

export class AddCommentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: '',
            loading: false
        }

        this.props.navigation.setParams({saveButton: this.getSaveButton()})
    }

    static navigationOptions = props => ({
        ...defaultNavigationOptions,
        headerRight: props.navigation.getParam('saveButton')
    })

    getSaveButton = () => (
        <IconButton
            onClick={this.addComment}
            icon={{
                name: 'save',
                size: 28,
                color: styleConstants.palette.white
            }}
            containerStyle={styles.iconView}
        />
    )

    addComment = async () => {
        this.setState({loading: true});

        try{
            const post = this.props.navigation.getParam('post');

            await postService.addComment(post.id, this.state.comment);

            this.props.navigation.goBack();
        } catch(e) {
            alert('Unable to save your comment. Please try again.');
        } finally {
            this.setState({loading: false});
        }
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
                        postAuthor={post.author_id}
                        postBody={post.body}
                        comment={comment}
                    />
                }
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    iconView: {
        marginRight: 10
    }
})