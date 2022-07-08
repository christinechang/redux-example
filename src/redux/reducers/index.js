import {combineReducers } from 'redux';
import courses from './courseReducer'; // because default export, we can rename to courses (from courseReducer)

const rootReducer = combineReducers({
    courses            // short hand for   courses: courses
});

export default rootReducer;