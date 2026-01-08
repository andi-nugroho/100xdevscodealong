import { useState } from 'react'
import './App.css'
import { CreateTodo } from './CreateTodo'
import { Todo } from './Todo'

function App() {
  const [todos, setTodos]= useState([]);
  fetch("http://localhost:3000/todos")
    .then(async (res)=>{
      const todojson = await es.json();
      setTodos(todojson.todos); 
    })
  return (
    <div>
      <CreateTodo />
      <Todo todos={todos}/>
    </div>
  )
}

export default App
