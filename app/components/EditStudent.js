import React, { Component } from 'react';
import { updateStudent } from '../redux/students';
import { connect } from 'react-redux';

export class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        email:'',
    };
  }

  render() {
        return (
            <form id='student-form' >
            <div>NEW FIRST NAME:</div>
            <input
              type="text"
              value={this.state.firstName}
              onChange={evt => this.setState({ firstName: evt.target.value })}
              style={{ margin: "100px"}}
            />
            <div>NEW LAST NAME:</div>
            <input
              type="text"
              value={this.state.lastName}
              onChange={evt => this.setState({ lastName: evt.target.value })}
              style={{ margin: "100px"}}
            />
            <div>NEW EMAIL:</div>
            <input
              type="text"
              value={this.state.email}
              onChange={evt => this.setState({ email: evt.target.value })}
              style={{ margin: "100px"}}
            />
            <button
              onClick={(evt) => {
                evt.preventDefault();
                this.props.update({...this.props,...this.state});
                this.setState({ firstName: '',lastName: '',email:''});
              }}
            >
              UPDATE STUDENT INFO
            </button>
            </form>
        );
      }
}

const mapStateToProps = (state) => ({
  students: state,
});

const mapDispatchToProps = (dispatch) => ({
  update: (state) => dispatch(updateStudent(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);


//render the 3 editable inputs
//import into singestudent component

//for students
//make the 3 things in reducer
//action creator
//thunk
//reducer adjustment

//create the put route



