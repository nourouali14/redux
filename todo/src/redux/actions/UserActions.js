import { ADD_USER, DELETE_USER, EDIT_USER } from "../constants/Constants"


export const addUser =(payload)=>{
    return{
        type:ADD_USER,
        payload
    }
} 

export const editUser=(payload)=>{
    return{
        type:EDIT_USER,
        payload
    }
}

export const deleteUser=(payload)=>{
    console.log(payload)
    return{
        type:DELETE_USER,
        payload
    }
}