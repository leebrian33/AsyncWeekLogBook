import axios from "axios";

let initialState = [];

let SET_CAMPUSES = "SET_CAMPUSES";
let DELETE_CAMPUS = "DELETE_CAMPUS";
let UPDATE_CAMPUS = "UPDATE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";


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
//ADD CAMPUS
export const addCampus = (campusInReducer) => {
  return {
    type: ADD_CAMPUS,
    campusInReducer,
  };
};
//THUNK ADD CAMPUS
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
//ACTION CREATOR: REMOVE A CAMPUS
export const removeCampus = (id) => {
  return {
    type: DELETE_CAMPUS,
    id,
  };
};
//THUNK: DELETE REQUEST
export const deleteCampus = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/campuses/${id}`);
      dispatch(removeCampus(id));
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
    const { data } = await axios.put(`/api/campuses/${campus.id}`, campus);
    dispatch(reformCampus(data));
  };
};

//REDUCER
export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      return [...state, action.campusInReducer]
    case DELETE_CAMPUS:
      return state.filter((campus) => campus.id !== action.id);
    case UPDATE_CAMPUS:
      return state.map((campus) =>
        campus.id === action.campusToBeUpdated.id ? action.campusToBeUpdated : campus
      );
    default:
      return state;
  }
}
