import { combineReducers } from 'redux';
import AddStudentReducer from './AddStudentReducer';

export default combineReducers({
  // addStudent is what we're calling this piece of state.
  studentDetails: AddStudentReducer
});
