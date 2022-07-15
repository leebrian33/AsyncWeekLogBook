import React from "react";
import { connect } from "react-redux";
import { fetchCampuses, deleteCampus } from "../redux/campuses";
import { Route, Link } from "react-router-dom";
import AddCampus from "./AddCampus";



export class AllCampuses extends React.Component {
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

  componentDidUpdate(prevProps) {
    if (prevProps.campuses.id !== this.props.campuses.id)
      try {
        this.props.load();
      } catch (error) {
        console.log(error);
      }
  }

  changeState(){
    this.props.load();
    //force the page to re-render
    this.setState({dummyCounter: this.state.dummyCounter++})
  }
  render() {
    const { campuses } = this.props.campuses || [];
    return (
      <div id="main">
            {campuses.map((element) => {
              if (campuses.length == 0) {
                return <h1>No Campuses</h1>;
              } else {
                return (
                  <div key={element.id}>
                    <Link to={`/campuses/${element.id}`}>
                    <div>{element.name}</div>
                    <div>{element.address}</div>
                    <div>{element.description}</div>
                    <img src={element.imageUrl} style={{ height: "200px", width: "200px" }}/>
                    </Link>
                    <button onClick={ () => this.props.delete(element.id)}>X</button>
                  </div>
                 
                );
              }
            })}
      
    
        <div onClick={this.changeState}>
          <AddCampus />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  campuses: state,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(fetchCampuses()),
  delete: (id) => dispatch(deleteCampus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
