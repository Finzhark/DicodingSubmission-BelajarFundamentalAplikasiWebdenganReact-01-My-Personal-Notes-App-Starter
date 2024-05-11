import React, { Component } from 'react';
import { useSearchParams } from 'react-router-dom';
import HomePageAction from '../components/HomePageAction';
import NoteListItem from '../components/NoteListItem';
import SearchNote from '../components/NoteSearch';
import { getActiveNotes, searchNotes } from '../utils/local-data';
import PropTypes from 'prop-types';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get('title');

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <HomePage onSearch={changeSearchParams} defaultKeyword={title} />
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
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
      <section className='homepage'>
        <SearchNote onSearch={this.onSearch} />
        <NoteListItem notes={notes} />
        <HomePageAction />
      </section>
    )
  }
}

HomePage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string,
}

export default HomePageWrapper