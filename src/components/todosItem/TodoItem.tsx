import React, {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";
import styles from './todoItem.module.css'
import {todosAPI} from "../../services/TodoService.ts";
import react from "@vitejs/plugin-react";

export const TodoItem:FC<ITodo> = (todoItem) => {
    const [deleteTodo] = todosAPI.useDeleteTodoMutation()
    const [updateTodo] = todosAPI.useUpdateTodoMutation()
    const handleDelete = (event:React.MouseEvent)=>{
        event.stopPropagation()
         deleteTodo(todoItem.id);

    }
    const handleUpdate = async ( event:React.MouseEvent)=>{

        const title = prompt();
        const description = prompt()

        await updateTodo({...todoItem,title,description} as ITodo);

    }
    return (
        <div key={todoItem.id} className={styles.container} onClick={handleUpdate}>
            <input type="checkbox" checked={todoItem.isCompleted} />
            <h1>{todoItem.id}</h1>
            {todoItem.title}
            <br/>
            {todoItem.description}
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}
