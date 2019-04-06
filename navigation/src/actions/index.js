import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASS_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
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
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => signInSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => signInSuccess(dispatch, user))
          .catch(() => signInFail(dispatch));
      });
    };
  };

const signInFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const signInSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
