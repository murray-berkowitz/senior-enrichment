import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="/students">Students</Link>
            <Link to="/campuses">Campuses</Link>
        </div>
    )
}

export default Nav;