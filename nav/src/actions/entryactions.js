import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  ENTRY_UPDATE,
  ADD_ENTRY
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
    // making user navigate back to the entries page to see meal entry
    .then(() => {
      dispatch({ type: ADD_ENTRY });
      Actions.entries({ type: 'reset' });
    });
  };
};
