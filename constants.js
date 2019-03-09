export const api = 'http://newyak.test/api';

export const MAX_POST_LENGTH = 60;

export const postUrl = id => `${api}/post/${id}`;
export const postCommentsUrl = id => `${api}/post/${id}/comments`;
export const searchUrl = (lat, lng) => `${api}/posts?lat=${lat}&lng=${lng}`;
