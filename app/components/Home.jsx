import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//REPLACE W/ REDUX, SAMPLE COMPONENT ONLY
export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1>Interplanetary Academies of JavaScript</h1>
                <p>Too lazy to come up with anything clever, just wanna make sure this works ya know? Sometimes you have to forgo creative freedom for the sake of completionism (I don't think that's a word, but do I look like a dictionary to you?). That being said, please check our students and campuses!</p>
                <div className="ctaCont">
                <div className="cta">
                    <Link to="/students">Students</Link>
                </div>
                <div className="cta">
                    <Link to="/campuses">Campuses</Link>
                </div>
               </div>
            </div>
        )
    }
}