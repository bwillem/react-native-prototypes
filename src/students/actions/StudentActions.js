// Actions can be separated into files based on feature
// - An action is an object with a type.
// - An actioin creator returns an action.
import { STUDENT_UPDATE } from '../../constants/types';

// ES6 syntax - param is expecting to be an object with 2 keys
export const studentUpdate = ({ prop, value }) => {
  return {
    type: STUDENT_UPDATE,
    payload: { prop, value }
  };
};
