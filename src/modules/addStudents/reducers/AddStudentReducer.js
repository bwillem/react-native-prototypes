// This is a pretty standard starting point for a reducer.
// - All reducers take 2 params: state and action.
// - State param is the app state at the time of calling the reducer.
// - Actions always have types, which tell the reducer what to return.
// - All reducers must default to returning initial state.
// - Reducers must return a NEW STATE OBJECT, not a mutated version of the
//   old state object. If you mutate the state and return that, the reducer
//   won't return anything. This is what immutable state refers to.
import { STUDENT_UPDATE } from '../actionTypes';

const INITIAL_STATE = {
  firstname: '',
  lastname: '',
  grade: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STUDENT_UPDATE:
      // This is ES6 key interpolation. The square brackets here
      // mean the key is defined at runtime.
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state;
  }
};
