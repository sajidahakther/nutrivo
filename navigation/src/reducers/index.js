import { combineReducers } from 'redux';
import AuthenticationReducer from './authenticationreducer';

export default combineReducers({
  auth: AuthenticationReducer
});
