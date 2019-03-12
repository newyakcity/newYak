import moment from 'moment';
import { MAX_POST_LENGTH, commentUrl, searchUrl, postUrl, postCommentsUrl, FETCH_CONFIG } from "../constants";

export const postService = {
    // Helper methods 
    formatDate: date => {
        const diff = moment.duration(moment.utc().diff(moment.utc(date)));

        const diffHours = Math.round(diff.asHours());

        return diffHours > 0 ? `${diffHours}h` : `${Math.ceil(diff.asMinutes())}m`;
    },

    getShortenedBody: postBody => {
        if(postBody.length < MAX_POST_LENGTH)
            return postBody;

        return `${postBody.slice(0, MAX_POST_LENGTH)}...`;
    },

    // API methods
    addComment: async (postId, body) => {
        const json = {postId, body}

        const res = await postService._postJson(commentUrl, json);

        return res;
    },

    createPost: async (post, coords) => {
        const json = {...post, ...coords}

        const res = await postService._postJson(postUrl, json);

        return res;
    },

    getPost: async id => (await postService._getJson(`${postUrl}/${id}`)),

    getPostComments: async id => (await postService._getJson(postCommentsUrl(id))),

    search: async (lat, lng) => (await postService._getJson(searchUrl(lat,lng))),
    
    _getJson: async url => {
        const res = await fetch(url);
        console.log(res);
        const json = await res.json();

        if(res.status === 400) {
            throw new Error(postService._mapErrors(json));
        } else if (res.status > 400) {
            console.log(res, json);
            throw new Error('api error');
        } else {
            return json;
        }
    },

    _postJson: async (url, jsonContent) => {
        const res = await fetch(url, {
            ...FETCH_CONFIG,
            body: JSON.stringify(jsonContent)
        });
        
        const json = await res.json();
        
        if(res.status === 400) {
            throw new Error(postService._mapErrors(json));
        } else if (res.status > 400) {
            (res, json);
            throw new Error('api error');
        } else {
            return json;
        }
    },

    _mapErrors: errors => {
        message = '';

        for(let [key, val] of errors) {
            message += `${key}:\n${val.join('\n')}\n`;
        }

        return message;
    }
}