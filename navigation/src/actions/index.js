import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASS_CHANGED
} from './types';

export const emailHasChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passHasChanged = (text) => {
  return {
    type: PASS_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
      });
  };
};
