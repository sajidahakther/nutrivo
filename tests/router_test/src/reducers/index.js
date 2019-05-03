import { combineReducers } from 'redux';
import AuthReducer from './authreducer';
import EntryReducer from './entryreducer';
import EntriesFetchReducer from './entriesfetchreducer';

export default combineReducers({
  auth: AuthReducer,
  entry: EntryReducer,
  entries: EntriesFetchReducer
});
