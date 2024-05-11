import React from 'react';
import PropTyes from 'prop-types';

function NoteSearch({ 
	onSearch 
}) {
	return (
		<section className="search-bar">
			<input 
				type="search" 
				placeholder="Cari berdasarkan judul..." 
				onChange={(event) => onSearch(event.target.value)} 
			/>
		</section>
	)
}

NoteSearch.propTypes = {
	onSearch: PropTyes.func.isRequired,
}

export default NoteSearch