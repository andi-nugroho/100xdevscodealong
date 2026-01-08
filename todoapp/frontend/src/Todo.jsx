export function Todo({todos}){
    return <div>
        {todos.map((curTodo)=>{
            return <div>
                <h1>{curTodo.title}</h1>
                <h2>{curTodo.description}</h2>
                <button >{curTodo.completed== true?"Completed":"Mark as Completed"}</button>
            </div>
        })}
    </div>
}