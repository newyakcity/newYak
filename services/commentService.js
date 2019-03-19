import {commentUrl, postCommentsUrl} from "../constants";
import {service} from './service';
import {Subject} from "rxjs/Subject";

export const commentService = {
    eventTypes: {
        addCommentComplete: 1
    },

    collectionObserver: new Subject(),
    eventObserver: new Subject(),

    addComment: async (postId, body) => {
        const json = {postId, body};
    
        const res = await service._postJson(commentUrl, json);
    
        commentService.eventObserver.next({
            type: commentService.eventTypes.addCommentComplete,
            comment: res
        });
    },

    getPostComments: async id => {
        const comments = await service._getJson(postCommentsUrl(id))
    
        commentService.collectionObserver.next(comments);
    }
}