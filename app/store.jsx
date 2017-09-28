import {createStore} from 'redux';

const GOT_STUDENTS_FROM_SERVER = 'GOT_STUDENTS_FROM_SERVER';
const GOT_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const GOT_STUDENT_FROM_SERVER = 'GOT_STUDENT_FROM_SERVER';
const GOT_CAMPUS_FROM_SERVER = 'GOT_CAMPUS_FROM_SERVER';
const TYPING_NEW_CAMPUS = 'TYPING_NEW_CAMPUS';

export const typingNewCampus = (createCampusText) => {
    return {
        type: TYPING_NEW_CAMPUS,
        createCampusText
    }
}

export const gotStudentsFromServer = (students) => {
    return {
        type: GOT_STUDENTS_FROM_SERVER,
        students
    }
}

export const gotStudentFromServer = (student) => {
    return {
        type: GOT_STUDENT_FROM_SERVER,
        student
    }
}

export const gotCampusesFromServer = (campuses) => {
    return {
        type: GOT_CAMPUSES_FROM_SERVER,
        campuses
    }
}

export const gotCampusFromServer = (campus) => {
    return {
        type: GOT_CAMPUS_FROM_SERVER,
        campus
    }
}

const initialState = {
    students: [],
    campuses: [],
    campus: {},
    student: {},
    createCampusText: ''
}

function reducer(state = initialState, action){
    switch(action.type) {
        case GOT_STUDENTS_FROM_SERVER:
          return Object.assign({}, state, {students: action.students})
        case GOT_STUDENT_FROM_SERVER:
          return Object.assign({}, state, {student: action.student})
        case GOT_CAMPUSES_FROM_SERVER:
          return Object.assign({}, state, {campuses: action.campuses})
        case GOT_CAMPUS_FROM_SERVER:
          return Object.assign({}, state, {campus: action.campus})
        case TYPING_NEW_CAMPUS:
          return Object.assign({}, state, {createCampusText: action.createCampusText})
        default:
          return state;
    }
}

const store = createStore(reducer);

export default store;