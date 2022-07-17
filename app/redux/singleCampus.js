import axios from 'axios'

const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS'
let UNREGISTER_STUDENT = "UNREGISTER_STUDENT";

export const setSingleCampus = (campusInReducer) => {
  return {
    type: SET_SINGLE_CAMPUS,
    campusInReducer
  }
};

export const fetchSingleCampus = (id) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get(`/api/campuses/${id}`)
        dispatch(setSingleCampus(data))
      } catch (err) {
        console.log(err)
      }
    }
  }

  //ACTION CREATOR: UNREGISTER STUDENT
export const removeStudentFromCampus = (studentUnregistered,id) => {
  
  return {
  type: UNREGISTER_STUDENT,
  studentUnregistered,
  id
  }
};
//THUNK: PUT REQUEST TO NULLIFY CAMPUSID
export const unregisterStudent = (student,id) => {
  return async (dispatch) => {
    try {
      let campusIdSpecific = {...student, route: 'unregister'}
      await axios.put(`/api/students/${student.id}`, campusIdSpecific);
     
      dispatch(removeStudentFromCampus(student,id))
    } catch (err) {
      console.log(err);
    }
  };
};

  let initialState = [];

 const singleCampusReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SINGLE_CAMPUS:
        return action.campusInReducer[0]
      case UNREGISTER_STUDENT:
        return  state.students.map((element)=> {
          if (element.campusId !== null){
            return element
          }
        })
        
      default:
        return state
    }
  }

  export default singleCampusReducer