import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllCampuses from './AllCampuses'
import AllStudents from './AllStudents'
import NavBar from './NavBar'
import SingleCampus from './SingleCampus'
import SingleStudent from './SingleStudent'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <NavBar />
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <p>This seems like a nice place to get started with some Routes!</p>
        </main>
          <Route exact path="/campuses" component={AllCampuses} />
          <Route exact path="/students" component={AllStudents} />  
          <Route path ="/campuses/:campusId" component={SingleCampus} />
          <Route path ="/students/:studentId" component={SingleStudent} />

      </div>
    </Router>
  );
};

export default Routes;
