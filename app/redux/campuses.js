import axios from 'axios';

let initialState = []

let SET_CAMPUSES = "SET_CAMPUSES";

export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  }
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    try{
    const {data} = await axios.get('/api/campuses')
    dispatch(setCampuses(data));
    } catch (err) {
      console.log(err)
    }
  }
};

export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
  //return null;
}
