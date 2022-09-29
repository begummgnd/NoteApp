import Button from 'react-bootstrap/Button';
import { BsTrash } from 'react-icons/bs'
import React, { useContext } from 'react'
import NotesContext from '../context/NotesContext';
const Note = ({ note }) => {
    const { dispatch } = useContext(NotesContext)
    return (
        <tr key={note.title}>
            <td>{note.title}</td>
            <td>{note.body}</td>
            <td style={{ width: "80px" }}>
                <Button variant="outline-light" onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })} >
                    <BsTrash style={{ width: "80px" }} color="red" /> </Button>
            </td>
        </tr>
    )
}

export default Note;