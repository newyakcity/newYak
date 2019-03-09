import moment from 'moment';
import { MAX_POST_LENGTH, searchUrl } from "../constants";

export const postService = {
    search: async (lat, lng) => {
        const res = await fetch(searchUrl(lat,lng));

        const json = await res.json();

        return json;
    },
    formatDate: date => moment(date).format('MMMM Do YYYY, h:mm a'),
    getShortenedBody: postBody => {
        if(postBody.length < MAX_POST_LENGTH)
            return postBody;

        return `${postBody.slice(0, MAX_POST_LENGTH)}...`;
    }
}