import React, { useState } from 'react'
import "./TodoInput.css"
import { useSelector, useDispatch } from "react-redux";
import { getData, postData } from '../../Redux/app/action';


function TodoInput({setContent,setHead}) {
  const dispatch = useDispatch();
    const [text,setText] = useState("")
    const [title,setTitle] = useState("")


    const handleClick = ()=>{

        setContent(text)
        setHead(title)
        // console.log(text)
        // console.log(title)

const payloadData = {
  "task":title,
  "desc":text, 
  "id_task":13,
   "current_status":"To Do",
}

dispatch(postData(payloadData)).then((res)=>{

  // console.log(res)
dispatch(getData())

}).catch((er)=>{
  console.log(er)
})


        setTitle("")
        setText("")

        
    }

  return (
    <div className='input-container'>
        
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='TODO TILTLE' className='input-div' />
        <textarea value={text} onChange={(e)=>setText(e.target.value)}  placeholder='WHAT DO YOU HAVE TO REMID , TEXT HERE' className='input-textarea' />
        <button onClick={handleClick} className='input-button'>SAVE</button>
        </div>
  )
}

export default TodoInput