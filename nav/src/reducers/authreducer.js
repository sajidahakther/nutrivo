// ensure action types are spelt correctly so that reducer catches it
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};

/* making a new object, taking all the properties from existing
state object and putting them into that object, then defining the
property email give it a value of action.payload and put it on
top of whatever properties were on that state object (overwriting it) */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
