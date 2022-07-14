import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { createCampus } from '../redux/addCampus'


class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      description:''
    };
  }

  render() {
    return (
        <form id='campus-form' >
        <div>NAME:</div>
        <input
          type="text"
          value={this.state.name}
          onChange={evt => this.setState({ name: evt.target.value })}
      
          style={{ margin: "100px"}}
        />
        <div>ADDRESS:</div>
        <input
          type="text"
          value={this.state.address}
          onChange={evt => this.setState({ address: evt.target.value })}
       
          style={{ margin: "100px"}}
        />
        <div>DESCRIPTION:</div>
        <input
          type="text"
          value={this.state.description}
          onChange={evt => this.setState({ description: evt.target.value })}
  
          style={{ margin: "100px"}}
        />
        <button
          onClick={(evt) => {
            evt.preventDefault();
            this.props.add({...this.state});
            this.setState({ name: '',address: '',description:'' });
          }}
        >
          Add Campus
        </button>
        </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (state) => dispatch(createCampus(state)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCampus);