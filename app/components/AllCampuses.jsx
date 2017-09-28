import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {gotCampusesFromServer, typingNewCampus} from '../store';
import axios from 'axios';
import SingleCampus from './SingleStudent';

export default class AllCampuses extends Component {
    constructor(){
        super()
        this.deleteCampus = this.deleteCampus.bind(this);
        this.getCampuses = this.getCampuses.bind(this);
        this.createCampus = this.createCampus.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = store.getState()
    }
    componentDidMount(){
        this.getCampuses();

        this.unsubscribe = store.subscribe(()=>{
            this.setState(store.getState());
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    handleChange(e){
        store.dispatch(typingNewCampus(e.target.value));
        console.log(this.state.createCampusText);        
    }
    getCampuses(){
        axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
            store.dispatch(gotCampusesFromServer(campuses))
        });
    }
    createCampus(e){
        e.preventDefault();        
        const campusName = this.state.createCampusText;
        axios.post('/api/campuses', {campusName})
        .then(res => res.data)
        .then(campus => {
            this.getCampuses();
        })
    }
    deleteCampus(e){
        const campusId = e.target.id*1;
        axios.delete(`/api/campuses/campus/${campusId}`)
        .then(res => res.data)
        .then(campus => {
            this.getCampuses();
        })
    }
    render(){
        const {campuses, createCampusText} = this.state;
        return (
            <div>
            <div className="addCampus">
               <form onSubmit={this.createCampus}>
                 <input value={createCampusText} onChange={this.handleChange} placeholder='Type Uni Name Here'/>
                <button type="submit" disabled={!createCampusText}>Add Campus</button>
               </form>
            </div>
            <div className="allCampuses">
            {
                campuses.map((campus) => (
                      <div className='campus'>
                      <Link key={campus.id} to={`/campuses/${campus.id}`}>
                      <h4>{campus.name}</h4>
                      </Link>
                         <h5>Number of students: {campus.students.length}</h5>
                         <div className="ctaCont">
                         <div className="cta delete">
                             <p id={campus.id} onClick={this.deleteCampus} >Delete</p>
                         </div>
                        </div>
                      </div>
                ))
              }
            </div>
            </div>
        )
    }
}