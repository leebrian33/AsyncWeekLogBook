import React from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/students";
import { Route, Link } from "react-router-dom";
import AddStudent from './AddStudent'
import RemoveStudent from './RemoveStudent'

// Notice that we're exporting the AllStudents component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyCounter: 0 
    };
    this.changeState = this.changeState.bind(this)
  }

  componentDidMount() {
    try {
      this.props.load();
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.students.id !== this.props.students.id) 
    try {
      this.props.load();
    } catch (error) {
      console.log(error);
    }
  }

  changeState(){
    this.props.load();
    this.setState({dummyCounter: this.state.dummyCounter++})
  }

  render() {
    const {students} = this.props.students
    return (<div id="main">
      
      <table >
        <tbody>
          <tr>
            <th>First Name:</th>
            <th>Last Name:</th>
            <th>Email:</th>
            <th>Photo:</th>
            <th>GPA:</th>
          </tr>
          
          {students.map((element) => {
            if (students.length == 0){
              return (
                <h1>No Students</h1>
              )} else {
            return (
              <tr key={element.firstName}>
                
                <th><Link to={`/students/${element.id}`}>{element.firstName}</Link></th>
                <th><Link to={`/students/${element.id}`}>{element.lastName}</Link></th>
                <th><Link to={`/students/${element.id}`}>{element.email}</Link></th>
                <th><img src={element.imageUrl} style={{height:"100px", width: "100px"}} /></th>
                <th>{element.gpa}</th>
                <th onClick={this.changeState}><RemoveStudent id={element.id}/></th>
              </tr> 
            )}
            })}
        </tbody>
      </table>
      <div onClick={this.changeState}><AddStudent/></div>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  students: state
});

const mapDispatchToProps = (dispatch) => ({
 load: () => dispatch(fetchStudents())
 
});

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);



