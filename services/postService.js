import moment from 'moment';
import { MAX_POST_LENGTH, searchUrl, postUrl } from "../constants";

export const postService = {
    formatDate: date => moment(date).format('MMMM Do YYYY, h:mm a'),
    getPost: async id => {
        const res = await fetch(postUrl(id))

        const json = await res.json();

        return json;
    },
    getShortenedBody: postBody => {
        if(postBody.length < MAX_POST_LENGTH)
            return postBody;

        return `${postBody.slice(0, MAX_POST_LENGTH)}...`;
    },
    search: async (lat, lng) => {
        const res = await fetch(searchUrl(lat,lng));

        const json = await res.json();

        return json;
    },
}