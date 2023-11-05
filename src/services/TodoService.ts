import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {ITodo} from "../models/ITodo.ts";


export const todosAPI = createApi({
    reducerPath: 'todosAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Todo'],
    endpoints: (build) => ({
            getAllTodos: build.query<ITodo[],number>({
                query: () => ({
                    url: `/todos`
                }),
                providesTags: result => ['Todo']
            }),
            createNewTodo: build.mutation<ITodo,ITodo>({
                query: (todo) => ({
                    url: `/todos`,
                    method: 'POST',
                    body:todo,
                }),
                invalidatesTags: ['Todo']
            }),
            deleteTodo: build.mutation<void,number>({
                query: (id) => ({
                    url: `/todos/${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['Todo']
            }),
            updateTodo: build.mutation<void,ITodo>({
                query: (todo) => ({
                    url: `/todos/${todo.id}`,
                    method: 'PUT',
                    body:todo,
                }),
                invalidatesTags: ['Todo']
            })
    }),

})