// ensure action types are spelt correctly so that reducer catches it
import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:

    default:
      return state;
  }
};
