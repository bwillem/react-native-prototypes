import {
  USERNAME_INPUT,
  PASSWORD_INPUT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actionTypes';
import {
  authenticate,
  loginToNodeApp,
  getUser
} from '../../../services/api';
import { Actions } from 'react-native-router-flux';

export const usernameChanged = (text) => {
  return {
    type: USERNAME_INPUT,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_INPUT,
    payload: text
  };
};

export const startLogin = () => {
  return {
    type: LOGIN_USER_BEGIN
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    authenticate(email, password)
      .then(response => response.json())
      .then(response => {
        const {servingDomain, authorizationCode} = response;
        loginToNodeApp(servingDomain, authorizationCode)
          .then(() => {
            getUser()
              .then(user => user.json())
              .then(user => {
                console.log('response to success', user)
                dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
                Actions.welcomeScreen(user);
              })
          })
          .catch(err => {
            console.log('node err', err);
            dispatch({ type: LOGIN_USER_FAIL, payload: 'Error has occured' });
          })
        // dispatch({ type: LOGIN_USER, payload: response })
      })
      .catch(err => {
        console.log('autheror', err)
        dispatch({ type: LOGIN_USER_FAIL, payload: 'Auth failed' });
      })
  };
};
