import axios from 'axios';

const API_KEY = 'AIzaSyB7Oa57QXJwmPTHBedbChar8_BGFG3xNLo';
const ROOT_URL = `https://www.googleapis.com/youtube/v3/search`;

export const FETCH_VIDEOS='FETCH_VIDEOS';
export const SELECT_VIDEO='SELECT_VIDEO'

export function fetchVideos(search) {
    const url = `${ROOT_URL}?part=snippet&key=${API_KEY}&q=${search}&type=video`
    const data = axios.get(url);
    return {
        type: FETCH_VIDEOS,
        payload: data
    }
}

export function selectVideo(video) {
    return {
        type: SELECT_VIDEO,
        payload: video
    }
}
