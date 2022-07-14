import axios from "axios";

let initialState = [];

let SET_CAMPUSES = "SET_CAMPUSES";
let DELETE_CAMPUS = "DELETE_CAMPUS";

//ACTION CREATOR: SET ALL CAMPUSES
export const setCampuses = (campuses) => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};
//THUNK: GRAB ALL CAMPUSES FROM ROUTE
export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/campuses");
      dispatch(setCampuses(data));
    } catch (err) {
      console.log(err);
    }
  };
};
//ACTION CREATOR: REMOVE A CAMPUS
export const removeCampus = (campusToBeDeleted) => {
  return {
    type: DELETE_CAMPUS,
    campusToBeDeleted,
  };
};
//THUNK: DELETE REQUEST
export const deleteCampus = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/campuses/${id}`);
      dispatch(removeCampus(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//REDUCER
export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.campusToBeDeleted);
    default:
      return state;
  }
}
