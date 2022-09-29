import React from "react"
import { useContext } from "react";
import NotesContext from "../context/NotesContext";
import Note from "./Note";
const NoteList = () => {
    const {notes} = useContext(NotesContext)
    return (
        notes.map((note) => (
            <Note key={note.title} note={note}  />
            ))
    )
}

export default NoteList