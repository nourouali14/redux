import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

const AddTodo = () => {
    const [input, setInput] = useState("")
    const handleInput=(e)=>{
        setInput(e.target.value)
    }
const dispatch=useDispatch()

  return (
    <div>
      <Form.Control size="lg" type="text" placeholder="Large text" onChange={handleInput} />
      {/* now when we click on the btn , the eventhandler with dispatch/send the input value to the AddTodoAction
      now , we hace our new todo in the redux store ,
      next step , go to Todo.js to get all todos from the store */}
      <Button onClick={()=>dispatch(addTodo({id:Math.random(),text:input}))} >add</Button>

    </div>
  )
}

export default AddTodo