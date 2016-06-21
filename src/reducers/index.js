import { combineReducers } from 'redux';
import VideoReducer from './video_reducer';

const rootReducer = combineReducers({
    videos: VideoReducer
});

export default rootReducer;
