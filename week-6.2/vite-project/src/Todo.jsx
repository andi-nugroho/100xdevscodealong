import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
      .then((res)=>{
        setTodos(res.data.todos)
      })
  },[]) // empty array means run on first mount // AKA known as dependency array

  return (
      <div>
        {todos.map(curTodo=> <Todo key={curTodo.id} title={curTodo.title} description={curTodo.description} />)}
      </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}
export default App
