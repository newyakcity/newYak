import moment from 'moment';
import { searchUrl } from "../constants";

export const postService = {
    search: async (lat, lng) => {
        const res = await fetch(searchUrl(lat,lng));

        const json = await res.json();

        return json;
    },
    formatDate: date => moment(date).format('MMMM Do YYYY, h:mm a'),
    getShortenedBody: postBody => {
        if(postBody.length < 20)
            return postBody;

        return `${postBody.slice(0, 60)}...`;
    }
}