import React, { Component } from 'react';
import { updateCampus } from '../redux/campuses';
import { connect } from 'react-redux';

export class EditCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        address: '',
    };
  }

  render() {
        return (
            <form id='campus-form' >
            <div>NEW CAMPUS NAME:</div>
            <input
              type="text"
              value={this.state.name}
              onChange={evt => this.setState({ name: evt.target.value })}
              style={{ margin: "100px"}}
            />
            <div>NEW CAMPUS ADDRESS:</div>
            <input
              type="text"
              value={this.state.address}
              onChange={evt => this.setState({ address: evt.target.value })}
              style={{ margin: "100px"}}
            />
            <button
              onClick={(evt) => {
                evt.preventDefault();
                this.props.update({...this.props,...this.state});
                this.setState({ name: '',address: ''});
              }}
            >
              UPDATE CAMPUS INFO
            </button>
            </form>
        );
      }
}

const mapStateToProps = (state) => ({
  campuses: state,
});

const mapDispatchToProps = (dispatch) => ({
  update: (state) => dispatch(updateCampus(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);//export the component





