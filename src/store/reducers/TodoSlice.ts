import {ITodo} from "../../models/ITodo.ts";
import {createSlice} from "@reduxjs/toolkit";

interface TodoState {
    todos: ITodo[]
    isLoading:boolean
    error:string
}

const initialState : TodoState = {
    todos: [],
    isLoading:false,
    error: '123',
}

export const TodosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    },
})

export default TodosSlice.reducer