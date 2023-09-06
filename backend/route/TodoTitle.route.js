const {Router} = require("express")
const todoTask = Router()
const {getTodo,postTodo,putTodo,deleteTodo} = require("../controller/todo.controller")
const {Todo} = require("../model/Todo.model")

todoTask.get("/",getTodo)

todoTask.post("/createtask",postTodo)

todoTask.delete("/:id_val",deleteTodo)

todoTask.put("/:edit",putTodo)

module.exports = {todoTask}