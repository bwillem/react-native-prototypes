import { combineReducers } from 'redux';
import AddStudentReducer from './modules/addStudents/reducers/AddStudentReducer';
import AuthReducer from './modules/login/reducers/AuthReducer';

export default combineReducers({
  auth: AuthReducer,
  studentDetails: AddStudentReducer
});
