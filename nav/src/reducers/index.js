import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import EntryReducer from './entryreducer';

export default combineReducers({
  auth: AuthReducer,
  entry: EntryReducer
});
