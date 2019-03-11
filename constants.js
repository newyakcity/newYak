export const api = 'http://newyak.test/api';

export const FETCH_CONFIG = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

export const MAX_POST_LENGTH = 60;

export const commentUrl = `${api}/comment`;
export const postUrl = `${api}/post`;
export const postCommentsUrl = id => `${api}/post/${id}/comments`;
export const searchUrl = (lat, lng) => `${api}/posts?lat=${lat}&lng=${lng}`;
