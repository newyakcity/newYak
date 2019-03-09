export const api = 'http://newyak.test/api'

export const searchUrl = (lat, lng) => `${api}/posts?lat=${lat}&lng=${lng}`

export const MAX_POST_LENGTH = 60;