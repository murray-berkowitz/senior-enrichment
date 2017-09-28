import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Nav from './Nav';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
//REPLACE W/ REDUX, SAMPLE COMPONENT ONLY
export default class Main extends Component {
    constructor(){
        super()
    }
    render() {
        return (
          <Router>
           <div className="wrapper">
              <Nav/>
              <Switch>
               <Route exact path='/' component={Home}/>
               <Route exact path='/students' component={AllStudents}/>
               <Route path='/students/:studentId' component={SingleStudent}/>
               <Route exact path='/campuses' component={AllCampuses}/>
               <Route path='/campuses/:campusId' component={SingleCampus}/>
              </Switch>
           </div>
          </Router>
        )
    }
}