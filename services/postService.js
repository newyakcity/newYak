import moment from 'moment';
import { MAX_POST_LENGTH, searchUrl, postUrl} from "../constants";
import {service} from './service';
import {Subject} from 'rxjs/Subject';

export const postService = {
    collectionObserver: new Subject(),
    postObserver: new Subject(),
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
    createPost: async (post, coords) => {
        const json = {...post, ...coords}

        const res = await service._postJson(postUrl, json);

        return res;
    },

<<<<<<< HEAD
    getPost: async id => (await service._getJson(`${postUrl}/${id}`)),

    search: async (lat, lng) => (await service._getJson(searchUrl(lat,lng))),
=======
    getPost: async id => {
        const res = await postService._getJson(`${postUrl}/${id}`);

        postObserver.next(res);
    },

    getPostComments: async id => (await postService._getJson(postCommentsUrl(id))),

    search: async (lat, lng) => {
        const res = await postService._getJson(searchUrl(lat,lng));
        
        postService.collectionObserver.next(res);
    },
>>>>>>> add observables to service
    
}