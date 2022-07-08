// will hold course related action creators
import * as types from "./actionTypes";

export function createCourse(course) {
    return {type: types.CREATE_COURSE, course};  // must have 'type' property  {. . . , course: course}
}