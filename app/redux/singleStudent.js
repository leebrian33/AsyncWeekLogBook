import axios from 'axios'

const SET_SINGLE_STUDENT = 'SET_SINGLE_STUDENT'



export const setSingleStudent = (studentInReducer) => {
  return {
    type: SET_SINGLE_STUDENT,
    studentInReducer
  }
};

export const fetchSingleStudent = (id) => {
    return async (dispatch) => {
      try {
        const {data} = await axios.get(`/api/students/${id}`)
        dispatch(setSingleStudent(data))
      } catch (err) {
        console.log(err)
      }
    }
  }

  let initialState = {};

 const singleStudentReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SINGLE_STUDENT:
        return action.studentInReducer[0]
      default:
        return state
    }
  }

  export default singleStudentReducer