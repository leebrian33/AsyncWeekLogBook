import axios from "axios";

let initialState = [];

let SET_CAMPUSES = "SET_CAMPUSES";
let DELETE_CAMPUS = "DELETE_CAMPUS";
let UPDATE_CAMPUS = "UPDATE_CAMPUS";

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
//ACTION CREATOR: UPDATE A CAMPUS
export const reformCampus = (campusToBeUpdated) => {
  return {
    type: UPDATE_CAMPUS,
    campusToBeUpdated,
  };
};
//THUNK: PUT REQUEST
export const updateCampus = (campus) => {
  return async (dispatch) => {
    console.log(campus)
    const { data } = await axios.put(`/api/campuses/${campus.id}`, campus);
    dispatch(reformCampus(data));
  };
};

//REDUCER
export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.campusToBeDeleted);
    case UPDATE_CAMPUS:
      return state.map((campus) =>
        campus.id === action.campusToBeUpdated.id ? action.campusToBeUpdated : campus
      );
    default:
      return state;
  }
}
