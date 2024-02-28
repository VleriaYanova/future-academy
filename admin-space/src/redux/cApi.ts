import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Course } from '../types/courseTypes'

type CoursesResponse = Course[]

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8888/api' }),
    tagTypes: ['Course'],
    endpoints: (build) => ({
        getAllCourses: build.query<CoursesResponse, void>({
            query: () => '/courses',
        }),
        addCourse: build.mutation<Course, Partial<Course>>({
            query: (body) => ({
                url: `/courses`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Course', id: 'LIST' }],
        }),
    })
})

export  const {useGetAllCoursesQuery, useAddCourseMutation} = api