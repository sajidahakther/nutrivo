// showing the entries on the screen from the database

import {
  ENTRIES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTRIES_FETCH_SUCCESS:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
};
