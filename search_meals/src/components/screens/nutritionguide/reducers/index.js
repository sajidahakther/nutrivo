import { combineReducers } from 'redux';
import LibraryReducer from './libraryreducer';
import SelectionReducer from './selectionreducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
