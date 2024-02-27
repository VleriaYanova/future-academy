import {createSlice} from "@reduxjs/toolkit";

const CourseSlice = createSlice({
    name: 'addCourse',
    initialState: {
        course: []
    },
    reducers: {
        addCourse(state, action){
            state.course.push(
                {

                }
            )
        },
        removeCourse(state, action){}
    },
});