import React from "react";
import { useState } from "react";
let counter = 4;

function App(){

    const [todo,setTodo] = useState([
        {
            id: 1,
            title: "title 1",
            description: "desc 1"
        },
        {
            id: 2,
            title: "title 2",
            description: "desc 2"
        },
        {
            id: 3,
            title: "title 3",
            description: "desc 3"
        }
    ])

    return(
        <div>
            <button onClick={()=>{
                setTodo([...todo,{
                    id: counter++,
                    title:"random Todo",
                    description: "random description"
                }])
            }}>Add todo</button>
            {todo.map((curTodo)=>
            //dont put curly braces arond xml elenets e.g components it gets treated like js cmd
            // key props need to pass so that react can identfy uniqueness between todos
                <Todo key={curTodo.id} title={curTodo.title} description={curTodo.description}/> 
            )}
        </div>
        
    )
}
 // you can also pass props and do prop.title.. but this is object destructoring slightly cleaner sytax
function Todo({title,description}){
    return(
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}

export default App;