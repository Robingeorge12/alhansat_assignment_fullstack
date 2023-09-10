import axios from "axios"
import * as types from "./actionType"
  
  

export const getData = ()=>(dispatch)=>{

    dispatch({type:types.TODO_REQUEST,payload:[]})
    return axios.get(`https://assignmentalhasant.onrender.com/todoget`).then((res)=>{

return dispatch({type:types.TODO_SUCCESS,payload:res.data.msg})
// console.log(res.data.msg)

}).catch((er)=>{
    
    dispatch({type:types.TODO_FAILURE,payload:[]})
    console.log(er)
})


}

export const postData = (payload)=>(dispatch)=>{

return axios.post(`https://assignmentalhasant.onrender.com/todoget/createtask`,payload).then((res)=>{

// console.log(res)
return dispatch({type:types.TODO_POST_SUCCESS,payload:res.data})

}).catch((er)=>{
    console.log(er)
})

}

export const putData = (id,payload)=>(dispatch)=>{

return axios.put(`https://assignmentalhasant.onrender.com/todoget/change/${id}`,payload).then((res)=>{

    // console.log(res)
  return  dispatch({type:types.TODO_UPDATE_SUCCESS,payload:res.data})
    
    }).catch((er)=>{
        console.log(er)
    })
    

}

export const deleteTodo = (id)=>(dispatch)=>{
// console.log(id)
return axios.delete(`https://assignmentalhasant.onrender.com/todoget/${id}`).then((res)=>{

// console.log(res)
return dispatch({type:types.TODO_DELETE_SUCCESS,payload:res.data.msg})

}).catch((er)=>{
    console.log(er)
})

}