import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/students";

import { fetchSingleCampus } from "../redux/singleCampus";

class SingleCampus extends Component {
  componentDidMount() {
    try {
      const campusId = this.props.match.params.campusId;
      this.props.loadSingleCampus(campusId);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    //props are assigned to the single campus
    const OneCampus = this.props.singleCampus; 
    //assign the label to an empty array so it does not run into race condition
    const persons = this.props.students || [];
    return (
      <div id={OneCampus.id}>
        <div id="single-campus">
          <h1>{OneCampus.name}</h1>
          <h2>{OneCampus.address}</h2>
          <p>{OneCampus.description}</p>
          <img
            src={OneCampus.imageUrl}
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        
        <div id="students-assigned">
          {persons.length!==0 ? <table>
            <tbody>
              <tr>
                <th>First Name:</th>
                <th>Last Name:</th>
                <th>Email:</th>
                <th>Photo:</th>
                <th>GPA:</th>
              </tr>
              
              {persons.map((element) => {
                if (persons.length == 0) {
                  return <h1>No Students</h1>;
                } else {
                  return (
                    <tr key={element.firstName}>
                      <th>
                        <Link to={`/students/${element.id}`}>
                          {element.firstName}
                        </Link>
                      </th>
                      <th>
                        <Link to={`/students/${element.id}`}>
                          {element.lastName}
                        </Link>
                      </th>
                      <th>
                        <Link to={`/students/${element.id}`}>
                          {element.email}
                        </Link>
                      </th>
                      <th>
                        <img
                          src={element.imageUrl}
                          style={{ height: "100px", width: "100px" }}
                        />
                      </th>
                      <th>{element.gpa}</th>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table> : <h3>NO STUDENTS AT THIS CAMPUS</h3>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleCampus: state.singleCampus,
    students: state.singleCampus.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleCampus: (id) => dispatch(fetchSingleCampus(id)),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
