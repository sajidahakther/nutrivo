import { combineReducers } from 'redux';
import LibraryReducer from './libraryreducer';
import SelectionReducer from './selectionreducer';
// reducers run the application state
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
