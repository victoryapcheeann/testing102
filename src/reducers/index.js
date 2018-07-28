import { combineReducers } from 'redux';
import topicsReducer from 'reducers/topics';

export default combineReducers({
  topics: topicsReducer
});