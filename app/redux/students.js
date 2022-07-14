import axios from "axios";

let initialState = [];

let SET_STUDENTS = "SET_STUDENTS";
let DELETE_STUDENT = "DELETE_STUDENT";

//ACTION CREATOR: SET ALL STUDENTS
export const setStudents = (students) => {
  return {
    type: SET_STUDENTS,
    students,
  };
};
//THUNK: GRAB ALL STUDENTS FROM ROUTE
export const fetchStudents = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/students");
      dispatch(setStudents(data));
    } catch (err) {
      console.log(err);
    }
  };
};
//ACTION CREATOR: REMOVE A STUDENT
export const removeStudent = (studentToBeDeleted) => {
  return {
    type: DELETE_STUDENT,
    studentToBeDeleted,
  };
};
//THUNK: DELETE REQUEST
export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/students/${id}`);
      dispatch(removeStudent(data));
    } catch (err) {
      console.log(err);
    }
  };
};
//REDUCER
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case DELETE_STUDENT:
      return state.filter(
        (student) => student.id !== action.studentToBeDeleted
      );
    default:
      return state;
  }
}
