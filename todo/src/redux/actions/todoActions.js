import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../contants/todoTypes"


export const addTodo=(payload)=>{
    return{
        type:ADD_TODO,
        payload
    }
} 

export const editTodo=(payload)=>{
    return{
        type:EDIT_TODO,
        payload
    }
}

export const deleteTodo=(payload)=>{
    console.log(payload)
    return{
        type:DELETE_TODO,
        payload
    }
}