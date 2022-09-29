import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiFillFileAdd } from 'react-icons/ai'
import NotesContext from '../context/NotesContext'
const AddNoteForm = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { dispatch } = useContext(NotesContext)
    const addNote = (e) => {
        e.preventDefault();
        if (title && body) {
            dispatch({
                type: 'ADD_NOTE',
                title,
                body
            })
            setTitle('')
            setBody('')
        }
    }
    return (
        <Form onSubmit={addNote}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Body</Form.Label>
                <Form.Control type="text" placeholder="Enter text body" value={body} onChange={(e) => setBody(e.target.value)} />
            </Form.Group>
            <Button variant="success" type="submit" style={{ float: "right" }}><AiFillFileAdd style={{ marginRight: "3px", marginBottom: "2px" }} />Add a Note</Button>
        </Form>
    )
}

export default AddNoteForm;