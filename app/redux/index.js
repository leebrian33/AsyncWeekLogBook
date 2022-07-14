import { combineReducers } from 'redux'
import campusesReducer from './campuses'
import studentsReducer from './students'
import singleCampusReducer from './singleCampus'
import singleStudentReducer from './singleStudent'
import addCampusReducer from './addCampus'
import addStudentReducer from './addStudent'

const appReducer = combineReducers({
  campuses: campusesReducer,
  students: studentsReducer,
  singleCampus: singleCampusReducer,
  singleStudent: singleStudentReducer,
  addCampus: addCampusReducer,
  addStudent: addStudentReducer
})

export default appReducer
