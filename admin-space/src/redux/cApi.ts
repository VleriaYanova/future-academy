import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Course, GetOneCourse } from '../types/courseTypes'

export type CoursesResponse = Course[]
type AllCourses = {
    $schema: string,
    size: number,
    page:number,
    totalPages: number,
    totalItems: number,
    items: CoursesResponse
}
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8888/api' }),
    tagTypes: ['Courses', 'Course'],
    endpoints: (build) => ({
        getAllCourses: build.query<AllCourses, string | void>({
            query: (params?) => `/courses${params}`,
           providesTags: (result) => result ? 
           [
            ...result.items.map(({ id }) => ({ type: 'Course' as const, id })), 'Course']
           : [{type:'Courses'}]
        }),
        addCourse: build.mutation<Course, Partial<Course>>({
            query: (body) => ({
                url: `/courses`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Course'}],
        }),
        
        deleteCourse: build.mutation<Course, number>({
            query: (id) => ({
                url: `/courses/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Course'}],
        }),
        updateCourse: build.mutation<Course, Partial<Course> & Pick<Course, 'id'>>({
            query: ({id, ...body}) => ({
                url: `/courses/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: [{ type: 'Course'}],
        }),
        getCourseByID: build.query<GetOneCourse, number>({
            query: (id) => `/courses/${id}`,
        })
    })
})

export  const {useGetAllCoursesQuery, useAddCourseMutation, useDeleteCourseMutation, useUpdateCourseMutation, useGetCourseByIDQuery} = api