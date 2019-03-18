import {commentUrl, postCommentsUrl} from "../constants";
import {service} from './service';

export const commentService = {
    addComment: async (postId, body) => {
        const json = {postId, body}

        const res = await service._postJson(commentUrl, json);

        return res;
    },

    getPostComments: async id => (await service._getJson(postCommentsUrl(id))),
}