import { combineReducers } from 'redux';
import listReducer from './listReducer';

const rootReducer = combineReducers({
  tasks: listReducer
});

export default rootReducer;
