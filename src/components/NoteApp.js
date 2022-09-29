import React, { useState, useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes'
import AddNoteForm from './AddNoteForm'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesContext from '../context/NotesContext'
import NoteList from './NoteList';
const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])  //dispatch metotdur. add_note, remove_note, populate_notes'dan biri olabilir

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if (notesData) {
            dispatch({ type: 'POPULATE_NOTES', notes: notesData })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <div className='container p-5'>
                <Card style={{ width: "600px", marginLeft: "auto", marginRight: "auto" }}>
                    <Card.Header>Notes</Card.Header>
                    {
                        notes && (
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        <NoteList />
                                    }
                                </tbody>
                            </Table>
                        )
                    }
                </Card>
                <Card className='mt-5' style={{ width: "800px", marginLeft: "auto", marginRight: "auto" }}>
                    <Card.Header>Add a New Note</Card.Header>
                    <Card.Body>
                        <AddNoteForm />
                    </Card.Body>
                </Card>
            </div>
        </NotesContext.Provider>
    )
}

export default NoteApp