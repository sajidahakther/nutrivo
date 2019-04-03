import { combineReducers } from 'redux';
import LibraryReducer from './libraryreducer';

// reducers run the application state
export default combineReducers({
  libraries: LibraryReducer
});
