import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
interface Post {
    id: number
    name: string
}
type PostsResponse = Post[]

const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        getPosts: build.query<PostsResponse, void>({
            // highlight-start
            query: () => 'posts',
            // highlight-end
        }),
        addPost: build.mutation<Post, Partial<Post>>({
            // highlight-start
            query: (body) => ({
                url: `posts`,
                method: 'POST',
                body,
            }),
            // highlight-end
            invalidatesTags: [{ type: 'Post', id: 'LIST' }],
        }),
    })
})