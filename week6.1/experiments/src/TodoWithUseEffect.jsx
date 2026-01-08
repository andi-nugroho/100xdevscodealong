import { useEffect,useState } from "react";


function App(){
    const [todo,setTodos] = useState([]);

    useEffect(()=>{
        setInterval(()=>{
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async(res)=>{
                const json = await res.json();
                setTodos(json.todos)
            })
        },10*1000)
    },[])

    return(
        <div>
            {todo.map((curTodo)=>
                <RenderTodo key={curTodo.id} title={curTodo.title} description={curTodo.description}/>
            )}
        </div>
    )
}
function RenderTodo({title,description}){
    return(
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default App;