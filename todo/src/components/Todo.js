import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditTodo from './EditTodo'
import { Button } from 'react-bootstrap'
import { deleteTodo } from '../redux/actions/todoActions'

const Todo = () => {
    const todos=useSelector(store=>store)


const dispatch=useDispatch()

  return (
    <div>
    {todos && todos.map((todo)=>
    <div style={{display:"flex"}} >
       <h1> {todo.text}  </h1>
       <EditTodo todo={todo} />
       <Button onClick={()=>dispatch(deleteTodo(todo.id))} >delete</Button>
    </div> )}
    
    </div>
  )
}

export default Todo