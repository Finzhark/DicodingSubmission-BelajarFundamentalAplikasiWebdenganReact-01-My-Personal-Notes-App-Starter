import React from 'react';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }

  return (
    <section className='homepage'>
      <h2>Ingin mencatat apa?</h2>
      <NoteInput 
        addNote={onAddNoteHandler} 
      />
    </section>
  )
}

export default AddPage