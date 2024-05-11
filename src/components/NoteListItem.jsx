import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types'

function NoteListItem({ 
  notes 
}) {
  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">
          Maaf, catatan tidak ditemukan!
        </p>
      </section>
    )
  }
  
  return (
     <section className="notes-list">
        {notes.map((note) => 
           <NoteItem 
              key={note.id} 
              id={note.id} 
              title={note.title} 
              createdAt={note.createdAt} 
              body={note.body} 
           />
        )}
     </section>
  );

}

NoteListItem.propTypes = {
   notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NoteListItem