import {commentUrl, postCommentsUrl} from "../constants";
import {service} from './service';
import {Subject} from "rxjs/Subject";

export const commentService = {
    collectionObserver: new Subject(),

    addComment: async (postId, body) => {
        const json = {postId, body}

        const res = await service._postJson(commentUrl, json);

        return res;
    },

    getPostComments: async id => {
        const comments = await service._getJson(postCommentsUrl(id))

        commentService.collectionObserver.next(comments);
    },
}