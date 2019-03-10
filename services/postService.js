import moment from 'moment';
import { MAX_POST_LENGTH, searchUrl, postUrl, postCommentsUrl, FETCH_CONFIG } from "../constants";

export const postService = {
    // Helper methods 
    formatDate: date => moment(date).format('MMMM Do YYYY, h:mm a'),

    getShortenedBody: postBody => {
        if(postBody.length < MAX_POST_LENGTH)
            return postBody;

        return `${postBody.slice(0, MAX_POST_LENGTH)}...`;
    },

    // API methods
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

        const json = await res.json();

        return json;
    },

    _postJson: async (url, jsonContent) => {
        const res = await fetch(url, {
            ...FETCH_CONFIG,
            body: JSON.stringify(jsonContent)
        });

        const json = await res.json();

        return json;
    }
}