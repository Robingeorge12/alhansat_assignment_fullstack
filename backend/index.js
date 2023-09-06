const express = require("express")
const cors = require("cors");
const {connection} = require("../backend/db")
const app = express();
require("dotenv").config();

const {Todo} = require("../backend/model/Todo.model")
const {todoTask} = require("../backend/route/TodoTitle.route")

app.use(express.json());
app.use(cors()); 

// console.log(Todo)
const PORT = process.env.PORT; 


app.use("/todoget",todoTask)

app.get("/",(req,res)=>{
    res.send({"msg":"move to another route"})
})

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(PORT,"true value");
  } catch (er) {
    console.log(er);
  }
//   console.log("port", PORT);
});


