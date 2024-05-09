import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function NoteSearch () {
  return (
    <div>
      <h2>Mencari Catatan Aktif</h2>
      <div className="search-bar">
        <input 
          type="text"
          placeholder="Cari berdasarkan judul..."
          value={search}
          onChange={(event) => searchHandler(event.target.value)}
        />
      </div>
    </div>
  )
}

NoteSearch.propType = {
  search: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
}

export default NoteSearch