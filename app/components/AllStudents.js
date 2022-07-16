import React from "react";
import { connect } from "react-redux";
import { fetchStudents, deleteStudent } from "../redux/students";
import { Link } from "react-router-dom";
import AddStudent from "./AddStudent";

export class AllStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    try {
      this.props.load();
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.students.id !== this.props.students.id)
      try {
        this.props.load();
      } catch (error) {
        console.log(error);
      }
  }

  render() {
    const { students } = this.props.students || [];
    return (
      <div id="main">
        {students.map((element) => {
          if (students.length == 0) {
            return <h1>No Students</h1>;
          } else {
            return (
              <div key={element.id}>
                <Link to={`/students/${element.id}`}>
                  <div> {element.firstName}</div>
                  <div>{element.lastName}</div>
                  <div>{element.email}</div>
                  <img
                    src={element.imageUrl}
                    style={{ height: "200px", width: "200px" }}
                  />
                  <div> {element.gpa}</div>
                </Link>
                <button
                  onClick={() => {
                    this.props.delete(element.id);
                  }}
                >
                  X
                </button>
              </div>
            );
          }
        })}

        <div >
          <AddStudent />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  students: state,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(fetchStudents()),
  delete: (id) => dispatch(deleteStudent(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
