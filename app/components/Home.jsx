import React, {Component} from 'react';
import axios from 'axios';
//REPLACE W/ REDUX, SAMPLE COMPONENT ONLY
export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            students: []
        }
    }
    componentDidMount(){
        axios.get('/api/students')
        .then(res => res.data)
        .then(students => this.setState({students}))
    }
    render() {
        const {students} = this.state;
        return (
            <div>
            <h1>Suck my butt cheeks from hell</h1>
            <ul>
                {
                    students.map((student) => {
                        return (
                            <li key={student.id}>{student.name}</li>
                        )
                    })
                }
            </ul>
            </div>
        )
    }
}