import React, { useEffect, useState } from 'react'
import "./EditModal.css"

import { Input, OutlinedInput, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { putData ,getData} from '../../Redux/app/action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function EditModal({handleOpen,open,handleClose,edit_id,
  setEdit_id,edit_task,setEdit_task,edit_desc,setEdit_desc}) {

  const [text,setText] = useState(edit_task)
  const [content,setContent] = useState(edit_desc)
  const [time,setTime] = useState(0)
  const dispatch = useDispatch();

// console.log(edit_task,edit_desc)


const handleText = (e)=>{
  setText(e.target.value)
}

const handleContent = (e)=>{

  setContent(e.target.value)
}

useEffect(()=>{

},[time])
console.log(time)
// const handleClose = ()=>{

//   useEffect(()=>{

//   },[])
// }

const handleUpdate = (edit_id)=>{

const payload = {
  "task":text,
  "desc":content,
}
console.log(edit_id,payload)

dispatch(putData(edit_id,payload)).then((res)=>{

  
  dispatch(getData())
 

}).catch((er)=>{

  console.log(er)

})

}

// console.log(text ,content)

  return (
    <div>
      
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            UPDATE YOUR CHANGES HERE
          </Typography>
<Box className="modal_box">
<OutlinedInput outline="1" type="text" value={text} onChange={handleText} />
<TextField type="text" value={content} onChange={handleContent} />
<Button onClick={()=>handleUpdate(edit_id)}>UPDATE</Button>
<Button onClick={()=>handleClose(setTime(prev=>prev+1))} >CLOSE</Button>
</Box>

          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>

    </div>
  )
}

export default EditModal