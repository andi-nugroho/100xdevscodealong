import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [id,setId] = useState(1);
  return <div>
    <button onClick={()=>{setId(1)}}>1</button>
    <button onClick={()=>{setId(2)}}>2</button>
    <button onClick={()=>{setId(3)}}>3</button>
    <button onClick={()=>{setId(4)}}>4</button>
    <Todo id={id} /> {/*only working for 1<=id<=5*/}
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
      .then((res)=>{
        setTodo(res.data.todo)
      })
  },[id]) //since now the fetch call depends upon state variable "id" so pass id as depeedency varaible

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;