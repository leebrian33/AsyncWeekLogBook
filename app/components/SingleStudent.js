import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchSingleStudent } from "../redux/singleStudent";

class SingleStudent extends Component {
  componentDidMount() {
    try {
      const studentId = this.props.match.params.studentId;
      this.props.loadSingleStudent(studentId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const OneStudent = this.props.singleStudent || {};
    const OneCampus = this.props.campus || {}
    
    return (
      <div id={OneStudent.singleStudent}>
        <div id="single-student">
          <h1>{OneStudent.firstName} {OneStudent.lastName}</h1>
          <h2>{OneStudent.description}</h2>
          <p>{OneStudent.gpa}</p>
          <img
            src={OneStudent.imageUrl}
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        {!OneCampus.id ? <h3>NOT ATTENDING SCHOOL</h3> : <div id={OneCampus.id}>
          <div id="single-campus">
          <Link to={`/campuses/${OneCampus.id}`}><h1>{OneCampus.name}</h1></Link>
          <Link to={`/campuses/${OneCampus.id}`}><h2>{OneCampus.address}</h2></Link>
          <Link to={`/campuses/${OneCampus.id}`}><p>{OneCampus.description}</p></Link>
            <img
              src={OneCampus.imageUrl}
              style={{ height: "200px", width: "200px" }}
            />
          </div>
        </div>}
      </div>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleStudent: state.singleStudent,
    campus: state.singleStudent.campus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleStudent: (id) => dispatch(fetchSingleStudent(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
