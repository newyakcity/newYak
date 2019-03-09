import { searchUrl } from "../constants";

export const postService = {
    search: async (lat, lng) => {
        const res = await fetch(searchUrl(lat,lng));

        const json = await res.json();

        return json;
    } 
}