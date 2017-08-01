import {combineReducers} from 'redux';
import VideoReducer from './reducer-video';
import VideoPlayer from './reducer-active-video';


const allReducers = combineReducers({
  video : VideoReducer,
  activeVideo : VideoPlayer
});

export default allReducers;
