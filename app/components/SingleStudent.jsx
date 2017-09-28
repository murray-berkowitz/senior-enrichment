import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import store, {gotStudentFromServer} from '../store';
import axios from 'axios';
import SingleCampus from './SingleCampus';

export default class SingleStudent extends Component {
    constructor(){
        super()
        this.state = store.getState()
    }
    componentDidMount(){
        const studentId = this.props.match.params.studentId;
        axios.get(`/api/students/student/${studentId}`)
        .then(res => res.data)
        .then(student => {
            store.dispatch(gotStudentFromServer(student))
        });

        this.unsubscribe = store.subscribe(()=>{
            this.setState(store.getState());
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }

    render(){
        const {student} = this.state;
        return (
            <div>
                  <h4>{student.name}</h4>
                  <h5>{student.email}</h5>
            </div>
        )
    }
}