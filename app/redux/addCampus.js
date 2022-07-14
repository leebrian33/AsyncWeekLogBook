import axios from "axios";

const ADD_CAMPUS = "ADD_CAMPUS";

export const addCampus = (campusInReducer) => {
  return {
    type: ADD_CAMPUS,
    campusInReducer,
  };
};

export const createCampus = (campus) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/campuses`, campus);
      dispatch(addCampus(data));
    } catch (err) {
      console.log(err);
    }
  };
};

let initialState = {};

const addCampusReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAMPUS:
      return action.campusInReducer
    default:
      return state;
  }
};
export default addCampusReducer;
