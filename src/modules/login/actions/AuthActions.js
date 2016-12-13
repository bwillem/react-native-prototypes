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

// This file starts with plain Action objects.
export const usernameChanged = text => {
  return {
    type: USERNAME_INPUT,
    payload: text
  };
};

export const passwordChanged = text => {
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

const loginSuccess = payload => {
  console.log('you have come far', payload)
  return {
    type: LOGIN_USER_SUCCESS,
    payload: payload
  };
};

const loginFailed = errMsg => {
  return {
    type: LOGIN_USER_FAIL,
    payload: errMsg
  }
};

// Check promises for their status code
const checkResponseForError = (response) => {
  console.log('checkrespssodfa', response);
  if (!response.ok) {
    console.log('errrrooorrr inside the check');
    throw Error(response.status);
  }
  return response;
}

// Catch errors, output error messages
const handleBubbledError = err => {
  console.log('handleBubbledError', err);
  return dispatch => {
    let errMsg;
    switch (err.message) {
      case '400' :
        errMsg = 'Those login credentials suck bud';
        break;
      default :
        errMsg = 'There was a problem loggin you in :('
    }
    dispatch(loginFailed(errMsg));
  };
}

// Execute the chain
export const loginUser = (email, password) => {
  return dispatch => {
    // API call to FAS
    return authenticate(email, password)
      .then(checkResponseForError)
      .then(response => dispatch(handleAuthSuccess(response)))
      .catch(err => dispatch(handleBubbledError(err)))
  }
}

// Handle the promise returned from FAS
const handleAuthSuccess = response => {
  return dispatch => {
    console.log('handleAuthSuccess', response);
    // Get the response body
    response = response.json()
      .then(response => {
        const { servingDomain, authorizationCode } = response;

        return loginToNodeApp(servingDomain, authorizationCode)
          .then(checkResponseForError)
          .then(() => dispatch(handleNodeSuccess()))
          .catch(err => dispatch(handleBubbledError(err)));
      })
  }
}

const handleNodeSuccess = () => {
  console.log('handleNodeSUccess');
  return dispatch => {
    // API call
    getUser()
      .then(checkResponseForError)
      .then(response => dispatch(loginSuccess(response)))
      .catch(err => dispatch(handleBubbledError(err)))
  }
}
