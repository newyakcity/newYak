import {FETCH_CONFIG} from '../constants';

export const service = {
    _getJson: async url => {
        const res = await fetch(url);

        console.log(res);

        const json = await res.json();

        if(res.status === 400) {
            throw new Error(postService._mapErrors(json));
        } else if (res.status > 400) {
            console.log(res, json);
            throw new Error('api error');
        } else {
            return json;
        }
    },

    _postJson: async (url, jsonContent) => {
        const res = await fetch(url, {
            ...FETCH_CONFIG,
            body: JSON.stringify(jsonContent)
        });

        console.log(res);
        
        const json = await res.json();
        
        if(res.status === 400) {
            throw new Error(postService._mapErrors(json));
        } else if (res.status > 400) {
            (res, json);
            throw new Error('api error');
        } else {
            return json;
        }
    },

    _mapErrors: errors => {
        message = '';

        for(let [key, val] of errors) {
            message += `${key}:\n${val.join('\n')}\n`;
        }

        return message;
    }
}