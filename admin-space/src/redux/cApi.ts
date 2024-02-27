import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Course } from '../types/courseTypes'
interface Post {
    id: number
    name: string
}
type CoursesResponse = Course[]

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8888' }),
    tagTypes: ['Course'],
    endpoints: (build) => ({
        getPosts: build.query<CoursesResponse, void>({
            query: () => '/api/courses',
        }),
        // addPost: build.mutation<Post, Partial<Post>>({
           
        //     query: (body) => ({
        //         url: `posts`,
        //         method: 'POST',
        //         body,
        //     }),
            
        //     invalidatesTags: [{ type: 'Post', id: 'LIST' }],
        // }),
    })
})

export  const {useGetPostsQuery} = api