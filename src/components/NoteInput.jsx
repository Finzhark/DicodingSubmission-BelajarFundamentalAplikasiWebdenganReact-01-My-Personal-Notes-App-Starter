import React, { Component } from 'react';
import { HiX, HiCheck } from 'react-icons/hi';
import { withRouter, Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(event) {
    this.setState({ 
      title: event.target.value 
    });
  }

  onInputHandler(event) {
    this.setState({ 
      body: event.target.textContent 
    })
  }

  onSubmitHandler() {
    const { title, body } = this.state;

    if (body.trim() === '') {
      toast.error('Catatan belum diisi!')
    } else {
      this.props.addNote({ title, body })
    }
  }

  render() {
    return (
      <section className='add-new-page'>
        <Toaster />
        <div className="add-new-page__input">
          <input 
            type="text" 
            className="add-new-page__input__title" 
            placeholder='Ketik Judul Di Sini' 
            value={this.state.title} 
            onChange={(event) => this.onTitleChange(event)} />
          <div 
            className="add-new-page__input__body" 
            contentEditable 
            data-placeholder='Dear Catatan, aku ingin mencatat...' 
            onInput={(event) => this.onInputHandler(event)}
          />
        </div>
        <div className="add-new-page__action">
          <Link
            to='/'
            className="action" 
            type='button' 
            title='Batal'
          >
            <HiX />
          </Link>
          <button 
            className="action" 
            type='button' 
            title='Simpan' 
            onClick={this.onSubmitHandler}
          >
            <HiCheck />
          </button>
        </div>
      </section>
    )
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default withRouter(NoteInput)