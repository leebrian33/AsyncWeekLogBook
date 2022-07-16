import React from "react";
import { connect } from "react-redux";
import { createStudent } from "../redux/students";

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  render() {
    return (
      <div className="add-campus">
        <div>FIRST NAME:</div>
        <input
          type="text"
          value={this.state.firstName}
          onChange={(evt) => this.setState({ firstName: evt.target.value })}
          onKeyDown={this.handleKey}
          style={{ margin: "100px" }}
        />
        <div>LAST NAME:</div>
        <input
          type="text"
          value={this.state.lastName}
          onChange={(evt) => this.setState({ lastName: evt.target.value })}
          onKeyDown={this.handleKey}
          style={{ margin: "100px" }}
        />
        <div>EMAIL:</div>
        <input
          type="text"
          value={this.state.email}
          onChange={(evt) => this.setState({ email: evt.target.value })}
          onKeyDown={this.handleKey}
          style={{ margin: "100px" }}
        />
        <button
          onClick={(evt) => {
            evt.preventDefault();
            this.props.add({ ...this.state });
            this.setState({ firstName: "", lastName: "", email: "" });
          }}
        >
          Add Student
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (state) => dispatch(createStudent(state)),
  };
};

export default connect(null, mapDispatchToProps)(AddStudent);
