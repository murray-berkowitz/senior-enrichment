import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import store, {gotCampusFromServer} from '../store';
import axios from 'axios';
import SingleStudent from './SingleStudent';

export default class SingleCampus extends Component {
    constructor(){
        super()
        this.state = store.getState()
    }
    componentDidMount(){
        const campusId = this.props.match.params.campusId;
        axios.get(`/api/campuses/campus/${campusId}`)
        .then(res => res.data)
        .then(campus => {
            store.dispatch(gotCampusFromServer(campus))
        });

        this.unsubscribe = store.subscribe(()=>{
            this.setState(store.getState());
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }

    render(){
        const {campus} = this.state;
        return (
            <div>
                  <h4>{campus.name}</h4>
            </div>
        )
    }
}