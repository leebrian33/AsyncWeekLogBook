import axios from "axios";

const ADD_STUDENT = "ADD_STUDENT";

export const addStudent = (studentInReducer) => {
  return {
    type: ADD_STUDENT,
    studentInReducer,
  };
};

export const createStudent = (student) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/students`, student);
      dispatch(addStudent(data));
    } catch (err) {
      console.log(err);
    }
  };
};

let initialState = {};

const addStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return action.studentInReducer;
    default:
      return state;
  }
};
export default addStudentReducer;
