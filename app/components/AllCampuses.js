import React from "react";
import { connect } from "react-redux";
import { fetchCampuses, deleteCampus } from "../redux/campuses";
import { Route, Link } from "react-router-dom";
import AddCampus from './AddCampus'
import RemoveCampus from './RemoveCampus'

export class AllCampuses extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    try {
      this.props.load();
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.campuses.id !== this.props.campuses.id) 
    try {
      this.props.load();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { campuses } = this.props.campuses;
    return (
      <div id="main">
        <table>
          <tbody>
            <tr>
              <th>School:</th>
              <th>Address:</th>
              <th>Description:</th>
              <th>Logo:</th>
            </tr>
            {campuses.map((element) => {
              if (campuses.length == 0) {
                return <h1>No Campuses</h1>;
              } else {
                return (
                  <tr key={element.name}>
                    <th><RemoveCampus id={element.id}/></th>
                    <th>
                      <Link to={`/campuses/${element.id}`}>{element.name}</Link>
                    </th>
                    <th><Link to={`/campuses/${element.id}`}>{element.address}</Link></th>
                    <th><Link to={`/campuses/${element.id}`}>{element.description}</Link></th>
                    <th>
                      <img
                        src={element.imageUrl}
                        style={{ height: "200px", width: "200px" }}
                      />
                    </th>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <AddCampus />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  campuses: state,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(fetchCampuses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
