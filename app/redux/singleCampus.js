import axios from 'axios'

const SET_SINGLE_CAMPUS = 'SET_SINGLE_CAMPUS'

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

  let initialState = {};

 const singleCampusReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_SINGLE_CAMPUS:
        return action.campusInReducer[0]
      default:
        return state
    }
  }

  export default singleCampusReducer