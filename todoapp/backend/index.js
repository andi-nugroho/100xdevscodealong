const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());


app.post("/todo",async(req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You have sent the wrong inputs"
        })
        return;
    }else{ //put in database
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: createPayload.completed
        })
        res.json({
            msg: "Todo created"
        })
        return;
    }
})

app.get("/todos",async(req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos: todos
    })
})

app.put("/completed",async(req,res)=>{
    const updatePayload = req.body;
    const parseUpPayload = updateTodo.safeParse(updatePayload);
    if(!parseUpPayload.success){
        res.status(411).json({
            msg: "You have sent the wrong id"
        })
        return;
    }else{ //update todo to completed in database
        await todo.updateOne({_id:req.body.id},{completed: true})
        res.json({
            msg: "Todo marked as completed"
        })
    }
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})