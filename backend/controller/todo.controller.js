const { Todo } = require("../model/Todo.model");

const getTodo = async (req, res) => {
  try {
    const title = await Todo.find();
    res.send({ msg: title });
  } catch (er) {
    console.log(er);
  }
};

const postTodo = async (req, res) => {
//   const data = req.body;
//   console.log(data)
//   const postData = await Todo.insertMany([data])
//   res.send({"msg":postData})
  try {
    const data = req.body;
    console.log(data);
    const postData = await Todo.insertMany(data);
    res.send({ msg_Created: postData });
  } catch (er) {
    res.send({ msg: er });
  }
};

const putTodo = async (req, res) => {
  const data_id = req.params.edit;
  const new_data = req.body;
//   console.log(new_data);
//   console.log(data_id);
  const changed_data = await Todo.updateMany(
    { id_task: data_id },
    { $set: new_data }
  );

  res.send({ msg: changed_data });
};

const deleteTodo = async (req, res) => {
  const id_param = req.params;
  console.log(id_param);
  const del = await Todo.deleteOne({ id_task: id_param.id_val });
  res.send({ msg: del });
};

module.exports = { getTodo, postTodo, deleteTodo, putTodo };
