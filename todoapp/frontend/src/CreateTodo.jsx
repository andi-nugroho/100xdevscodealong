import { useState } from "react";

export function CreateTodo(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    return <div>
        <input type="text" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/><br />
        <input type="text" placeholder="description" onChange={(e)=>{setDescription(e.target.value)}} /><br />
        <button onClick={async ()=>{
            await fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    completed: false
                }),headers:{
                    "content-type": "application/json"
                }
            })
            alert("Todo added");
        }} >Add Todo</button>
    </div>
}