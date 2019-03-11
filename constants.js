import {headerStyle, styleConstants} from './styles';

//export const api = 'http://newyak.test/api';
export const api = 'http://157.230.53.198/api';

export const FETCH_CONFIG = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

export const MAX_POST_LENGTH = 60;

export const defaultNavigationOptions = {
    headerStyle,
    headerTintColor: styleConstants.palette.white
}

export const commentUrl = `${api}/comment`;
export const postUrl = `${api}/post`;
export const postCommentsUrl = id => `${api}/post/${id}/comments`;
export const searchUrl = (lat, lng) => `${api}/posts?lat=${lat}&lng=${lng}`;
