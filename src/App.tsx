
import './App.css'
import { todosAPI} from "./services/TodoService.ts";
import {TodoItem} from "./components/todosItem/TodoItem.tsx";
import {ITodo} from "./models/ITodo.ts";
import {Board} from "./components/board";




function App() {
    const {data: todos,error,isLoading,refetch}= todosAPI.useGetAllTodosQuery(100);
    const [createTodo,{}]= todosAPI.useCreateNewTodoMutation()

    console.log(todos);
const handleCreate = async () =>{
    const title = prompt();
    const description = 'задачка из пропта'
    const isCompleted = false
    await  createTodo({title:title, description:description, isCompleted:isCompleted} as ITodo)
}

  return (
    <>
    <div>
        <button onClick={()=>refetch()}>REFETCH</button>
        <button onClick={handleCreate}>ADD NEW Todo</button>
        {error && <h1>Произошла ошибка во время запроса</h1>}
        {isLoading && <h1>Загрузка...</h1>}
        {todos && todos.map(todoItem=><TodoItem id={todoItem.id} title={todoItem.title} description={todoItem.description} isCompleted={todoItem.isCompleted}/>)}
    </div>
        <Board></Board>
    </>
  )
}

export default App
