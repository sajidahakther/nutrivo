import {
  ENTRY_SAVE_SUCCESS,
  ENTRY_UPDATE,
  ADD_ENTRY
} from '../actions/types';

const INITIAL_STATE = {
  food: '',
  serving: '',
  duration: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ENTRY_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ADD_ENTRY:
      return INITIAL_STATE;
    case ENTRY_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
