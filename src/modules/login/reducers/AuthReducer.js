import {
  USERNAME_INPUT,
  PASSWORD_INPUT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../actionTypes';

const INITIALSTATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIALSTATE, action) => {
  switch(action.type) {
    case USERNAME_INPUT:
      return { ...state, email: action.payload };
    case PASSWORD_INPUT:
      return { ...state, password: action.payload };
    case LOGIN_USER_BEGIN:
      return { ...state, loading: true, error: '' }
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
