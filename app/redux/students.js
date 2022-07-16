import axios from "axios";

let initialState = [];

let SET_STUDENTS = "SET_STUDENTS";
let DELETE_STUDENT = "DELETE_STUDENT";
let UNREGISTER_STUDENT = "UNREGISTER_STUDENT";
let UPDATE_STUDENT = "UPDATE_STUDENT"
const ADD_STUDENT = "ADD_STUDENT";

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
//ADD STUDENT ACTION CREATOR
export const addStudent = (studentInReducer) => {
  return {
    type: ADD_STUDENT,
    studentInReducer,
  };
};
//THUNK ADD NEW STUDENT
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
//ACTION CREATOR: REMOVE A STUDENT
export const removeStudent = (id) => {
  return {
    type: DELETE_STUDENT,
    id,
  };
};
//THUNK: DELETE REQUEST
export const deleteStudent = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/students/${id}`);
      dispatch(removeStudent(id));
    } catch (err) {
      console.log(err);
    }
  };
};
//ACTION CREATOR: UNREGISTER STUDENT
export const removeStudentFromCampus = (studentToBeUnregistered) => {
  return {
    type: UNREGISTER_STUDENT,
    studentToBeUnregistered,
  };
};
//THUNK: PUT REQUEST TO NULLIFY CAMPUSID
export const unregisterStudent = (student) => {
  return async (dispatch) => {
    try {
      let campusIdSpecific = {...student, route: 'unregister'}
      await axios.put(`/api/students/${student.id}`, campusIdSpecific);
      dispatch(removeStudentFromCampus(student));
    } catch (err) {
      console.log(err);
    }
  };
};
//ACTION CREATOR: UPDATE STUDENT INFO
export const reformStudentInfo = (studentToBeEdited) => {
  return {
    type: UPDATE_STUDENT,
    studentToBeEdited,
  };
};
//THUNK: PUT REQUEST TO UPDATE STUDENT INFO
export const updateStudent = (student) => {
  return async (dispatch) => {
    try {
      console.log(student)
      const { data } = await axios.put(`/api/students/${student.id}`, student);
      dispatch(reformStudentInfo(data));
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
     case ADD_STUDENT:
      return [...state, action.studentInReducer]
    case DELETE_STUDENT:
      return state.filter(
        (student) => student.id !== action.id
      );
    case UNREGISTER_STUDENT:
      return state.map((student) =>{
        if (student.campusId === action.studentToBeUnregistered.campusId){
          return student
        }
          
  });
    case UPDATE_STUDENT:
    return state.map((student) =>
      student.id === action.studentToBeEdited.id
        ? {...action.studentToBeEdited,
        firstName: action.studentToBeEdited.firstName,
        lastName: action.studentToBeEdited.lastName,
        email: action.studentToBeEdited.email,}
        : student
    );
    default:
      return state;
  }
}
