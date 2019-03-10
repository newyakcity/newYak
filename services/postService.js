import moment from 'moment';
import { MAX_POST_LENGTH, searchUrl, postUrl, postCommentsUrl } from "../constants";

export const postService = {
    // Helper methods 
    formatDate: date => moment(date).format('MMMM Do YYYY, h:mm a'),

    getShortenedBody: postBody => {
        if(postBody.length < MAX_POST_LENGTH)
            return postBody;

        return `${postBody.slice(0, MAX_POST_LENGTH)}...`;
    },

    // API methods
    getPost: async id => (await postService._getJson(postUrl(id))),

    getPostComments: async id => (await postService._getJson(postCommentsUrl(id))),

    search: async (lat, lng) => (await postService._getJson(searchUrl(lat,lng))),
    
    _getJson: async url => {
        const res = await fetch(url);

        const json = await res.json();

        return json;
    }
}