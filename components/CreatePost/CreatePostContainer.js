import React, {Component} from 'react';

import CreatePost from './CreatePost';

export class CreatePostContainer extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <CreatePost/>
    }
}