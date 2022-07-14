import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import { deleteCampus } from "../redux/campuses";

class RemoveCampus extends React.Component {
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
        X: REMOVE CAMPUS
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deleteCampus(id)),
  };
};

export default connect(null, mapDispatchToProps)(RemoveCampus);
