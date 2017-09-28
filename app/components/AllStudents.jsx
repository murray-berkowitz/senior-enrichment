import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import store, {gotStudentsFromServer} from '../store';
import axios from 'axios';
import SingleStudent from './SingleStudent';

export default class AllStudents extends Component {
    constructor(){
        super()
        this.state = store.getState()
    }
    componentDidMount(){
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => {
            store.dispatch(gotStudentsFromServer(students))
        });

        this.unsubscribe = store.subscribe(()=>{
            this.setState(store.getState());
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }

    render(){
        const {students} = this.state;
        return (
            <div>
                  {
                    students.map((student) => (
                        <Link key={student.id} to={`/students/${student.id}`}>{student.name}</Link>
                    ))
                  }
            </div>
        )
    }
}