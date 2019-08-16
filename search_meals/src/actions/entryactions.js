import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ENTRY_UPDATE,
  ADD_ENTRY,
  ENTRIES_FETCH_SUCCESS,
  ENTRY_SAVE_SUCCESS
} from './types';

export const entryupdate = ({ prop, value }) => {
  return {
    type: ENTRY_UPDATE,
    payload: { prop, value }
  };
};

export const addentry = ({ food, serving, duration }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/meals`)
    .push({ food, serving, duration }) 
    .then(() => {
      dispatch({ type: ADD_ENTRY });
      Actions.entries({ type: 'reset' });
    });
  };
};

export const entriesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/meals`)
      .on('value', snapshot => {
        dispatch({ type: ENTRIES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const entrysave = ({ food, serving, duration, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/meals/${uid}`)
      .set({ food, serving, duration })
      .then(() => {
        dispatch({ type: ENTRY_SAVE_SUCCESS });
        Actions.entries({ type: 'reset' });
      });
  };
};

export const entrydelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/meals/${uid}`)
      .remove()
      .then(() => {
        Actions.entries({ type: 'reset' });
      });
  };
};
