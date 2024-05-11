import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteListItem from '../components/NoteListItem';
import NoteSearch from '../components/NoteSearch';
import { getArchivedNotes, searchNotes } from '../utils/local-data';
import PropTypes from 'prop-types';

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return (
    <ArchivePage 
      onSearch={changeSearchParams} 
      defaultKeyword={title} 
    />
  )
}

class ArchivePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState({ keyword });

    this.props.onSearch(keyword);
  }

  render() {
    const notes = searchNotes(this.state.notes, this.state.keyword);

    return (
      <section className='archives-page'>
        <NoteSearch onSearch={this.onSearch} />
        <NoteListItem notes={notes} />
      </section>
    )
  }
}

ArchivePage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string
}

export default ArchivePageWrapper