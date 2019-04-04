import { combineReducers } from 'redux';
import AuthenticationReducer from './authenticationreducer';

export default combineReducers({
  authentication: AuthenticationReducer
});
