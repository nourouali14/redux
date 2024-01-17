import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions/todoActions';

const EditTodo = ({todo}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [newTodo, setNewTodo] = useState(todo.text)
    const handleInput=(e)=>{
        setNewTodo(e.target.value)
    }
    const dispatch=useDispatch()

    const send=()=>{
        dispatch(
            editTodo({id:todo.id,text:newTodo})
            )
    }


  return (
    <div>
          <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form.Control size="lg" type="text"  value={newTodo} onChange={handleInput} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={send} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default EditTodo