import React from 'react'
import {Link} from 'react-router-dom'

let NavBar = () => {
  return (
    <div id='navBar'>
        <nav>
            <Link to="/" style={{margin: "50px"}}>HOME</Link>
            <Link to="/students" style={{margin: "50px"}}>ALL STUDENTS</Link>
            <Link to="/campuses" style={{margin: "50px"}}>ALL CAMPUSES</Link>
        </nav>
    </div>
  )
}

export default NavBar