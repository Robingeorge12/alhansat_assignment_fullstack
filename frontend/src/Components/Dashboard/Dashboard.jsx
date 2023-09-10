import React, { useDebugValue, useEffect, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import { useSelector, useDispatch } from "react-redux";
import "./Dashboard.css";
import { Button, Card, CardContent, Typography } from "@mui/material";
import TodoInput from "../TodoInput/TodoInput";
import TodoGrid from "../TodoGrid/TodoGrid";
import { deleteTodo, getData, postData } from "../../Redux/app/action";
import EditModal from "../EditModal/EditModal";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Dashboard() {
  const dispatch = useDispatch();

  const [head, setHead] = useState("");
  const [content, setContent] = useState("");
  const [prev, setPrev] = useState(0);

  const [edit_id, setEdit_id] = useState();
  const [edit_task, setEdit_task] = useState("");
  const [edit_desc, setEdit_desc] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [completed,setCompleted] = useState([])
  const [incomplete,setIncomplete] = useState([])

  const { todoData } = useSelector((state) => {
    return {
      todoData: state.todoData,
    };
  });

  useEffect(() => {
    // dispatch(getData())
  }, [prev]);

  useEffect(() => {
    dispatch(getData())
      .then((res) => {
        // console.log(res.payload);
        setCompleted(res.payload.filter((t)=>t.completed))
        setCompleted(res.payload.filter((t)=>!t.completed))
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  const handleEdit = (id_val, task, desc) => {
    setEdit_desc(desc);
    setEdit_task(task);
    setEdit_id(id_val);
    setOpen(true);

    // console.log(id_val)
  };

  const handleDelete = (value) => {
    dispatch(deleteTodo(value))
      .then((res) => {
        setPrev((count) => count + 1);
        dispatch(getData());
        // console.log(res,prev)
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const handleSwipe = (swipe_val) => {};


  const handleDragFun = (result)=>{

    const {destination,source,draggableId} = result
    console.log(destination)
    console.log(source)
    console.log(draggableId)

    // if(source.droppableId==destination.droppableId) {
    //   return ;
    // }

    // if(source.droppableId==2) {
      
    //   setCompleted(removeItemById(draggableId,completed))
    // }else{
    //   setIncomplete(removeItemById(draggableId,incomplete))
    // }

    // const task = findItemById(draggableId,[...incomplete,...completed])

    // if(source.droppableId==2) {
      
    //   setCompleted([{...task,completed:!task.completed},...completed])
    // }else{
    //   setIncomplete([{...task,completed:!task.completed},...incomplete])
    // }

    // console.log("todoData")
  }

function findItemById(id,array){
  return array.find((el)=>el.id==id)
}

const removeItemById = (id,array)=>{
  return array.filter((el)=>el.id!=id)
}

  // console.log(todoData);
  return (
    <DragDropContext onDragEnd={handleDragFun}>
      <div className="dashboard-container">
        <div className="dashboard-maindiv1">
          <TodoInput setHead={setHead} setContent={setContent} />
        </div>
        <div className="dashboard-maindiv2">
          <div className="input-grid-one">
            <p className="input-grid-one-h">To Do</p>
            <div className="input-scroll">
              <div className="input-todo-list-container">
                {todoData?.map((el, i) => {
                  return (
                    <Droppable key={el._id} droppableId="some_id">
                    {provided => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
          
                    <Draggable key={el._id} draggableId={el._id} index={i}>
                      {(provided,snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="input-todo-list-container-div"
                      >
                        <p className="input-todo-list-head">{el.task}</p>
                        <p className="input-todo-list-text">{el.desc}</p>

                        <div className="input-todo-list-statusdiv">
                          <p className="input-todo-list-status">Status:</p>{" "}
                          <button
                            onClick={() => handleSwipe(el._id)}
                            className="input-todo-list-status-btn"
                          >
                            {el.current_status}
                          </button>
                        </div>
                        <div className="input-todo-list-buttondiv">
                          <button
                            onClick={() => handleEdit(el._id, el.task, el.desc)}
                            className="input-todo-list-btn1"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(el._id)}
                            className="input-todo-list-btn2"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                )}
                    </Draggable>
                    {provided.placeholder}
                       </div>
                       )}
                     </Droppable>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="input-grid-two">
          <p className="input-grid-one-h">Doing</p>
            <div className="input-scroll-two">
              <Droppable droppableId="input-grid-two">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    // isDraggingOver ={snapshot.isDraggingOver}
                    // className="input-scroll-two"
                  >
                    {/* ... Content for input-grid-two ... */}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
          <div className="input-grid-three">
          <p className="input-grid-one-h">Done</p>
            <div className="input-scroll-three">
              <Droppable droppableId="input-grid-three">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    //  israggingOver ={snapshot.isDraggingOver}
                  
                  >
                    {/* ... Content for input-grid-two ... */}
                  </div>
                )}
              </Droppable>
            </div>
          </div>
        </div>

        {edit_id && (
          <>
            {" "}
            <EditModal
              edit_id={edit_id}
              setEdit_id={setEdit_id}
              edit_desc={edit_desc}
              setEdit_desc={setEdit_desc}
              edit_task={edit_task}
              setEdit_task={setEdit_task}
              handleOpen={() => setOpen(true)}
              open={open}
              handleClose={handleClose}
            />{" "}
          </>
        )}
      </div>
    </DragDropContext>
  );
}

export default Dashboard;
