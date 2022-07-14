import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { deleteStudent } from "../redux/students";

class RemoveStudent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={(evt) => {
          evt.preventDefault();
          this.props.delete(this.props.id);
        }}
      >
        X: REMOVE STUDENT
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteStudent(id)),
  };
};

export default connect(null, mapDispatchToProps)(RemoveStudent);
