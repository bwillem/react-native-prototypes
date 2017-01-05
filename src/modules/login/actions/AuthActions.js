import {
  USERNAME_INPUT,
  PASSWORD_INPUT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  EMAIL_ERROR
} from '../actionTypes';
import {
  authenticate,
  loginToNodeApp,
  getUser
} from '../../../services/auth/api';
import { Actions } from 'react-native-router-flux';

// This file starts with plain action creators.
// The next section is dispatched actions.
// This illustrates the 2 types of functions here.
// 1. f(x) where x is some piece of state and f returns an object.
// 2. f(d,x) where f executes d(x).
export const usernameChanged = text => {
  return {
    type: USERNAME_INPUT,
    payload: text
  };
};

export const emailError = error => {
 return {
   type: EMAIL_ERROR,
   payload: error
 };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_INPUT,
    payload: text
  };
};

// Used to trigger button spinner
export const startLogin = () => {
  return {
    type: LOGIN_USER_BEGIN
  };
};

const loginFailed = errMsg => {
  return {
    type: LOGIN_USER_FAIL,
    payload: errMsg
  }
};

// Check promises for their status code
const checkResponseForError = res => res.ok ? res : res.json()
  .then(err => Promise.reject(err));

// Catch errors, output appropriate messages
const dispatchBubbledError = err => {
  console.log('handleBubbledError', err);
  return dispatch => {
    let errMsg;
    switch (err.status) {
      case 401 :
        errMsg = 'Those login credentials did not work';
        break;
      default :
        errMsg = 'There was a problem loggin you in :('
    }
    dispatch(loginFailed(errMsg));
  };
}

// Execute auth lifecycle
export const loginUser = (email, password) => {
  return dispatch => {
    // API call to FAS
    authenticate(email, password)
      .then(checkResponseForError)
      .then(res => dispatch(handleAuthSuccess(res)))
      .catch(err => dispatch(dispatchBubbledError(err)))
  }
}

// Get accounts
export const fetchAccounts = email => {
  return dispatch => {

  }
}

// Handle the promise returned from FAS
const handleAuthSuccess = res => {
  return dispatch => {
    console.log('handleAuthSuccess', res);
    // .json() is an async call that waits for the response body
    res = res.json()
      .then(responseBody => {
        const { servingDomain, authorizationCode } = responseBody;

        loginToNodeApp(servingDomain, authorizationCode)
          .then(checkResponseForError)
          .then(() => dispatch(handleNodeSuccess()))
          .catch(err => dispatch(dispatchBubbledError(err)));
      })
  }
}

// Communicated with node app successfully
const handleNodeSuccess = () => {
  console.log('handleNodeSUccess');
  return dispatch => {
    // API call returns the logged in user object
    getUser()
      .then(checkResponseForError)
      .then(res => dispatch(dispatchUser(res.json())))
      .catch(err => dispatch(dispatchBubbledError(err)))
  }
}

const dispatchUser = user => {
  console.log('dispatchUser', user)
  return dispatch => {
    // user is still a promise, we must resolve it to get the response body
    user.then(userObj => {
      console.log('user promise resolved', userObj);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: userObj
      });

      // Router actions are called in action creator funcs.
      Actions.welcomeScreen(userObj);
    })
  }
}
