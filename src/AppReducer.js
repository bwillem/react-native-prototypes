import { combineReducers } from 'redux';
import AuthReducer from './modules/login/reducers/AuthReducer';
import ClassReducer from './modules/classList/reducers/ClassReducer'
import AddStudentReducer from './modules/addStudents/reducers/AddStudentReducer';

export default combineReducers({
  // Pieces of state we're combining together.
  // Generally we will desconstruct the piece we need
  //  in a component's mapStateToProps function.
  auth: AuthReducer,
  classList: ClassReducer,
  studentDetails: AddStudentReducer
});
