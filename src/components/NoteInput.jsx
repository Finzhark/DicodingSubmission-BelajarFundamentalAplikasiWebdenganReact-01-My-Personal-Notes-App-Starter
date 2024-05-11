import React, { Component } from 'react';
import { HiX, HiCheck } from 'react-icons/hi';
import { FaRegFaceSadTear } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

class NoteInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: parse('')
    }

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onCancelHandler = this.onCancelHandler.bind(this);
  }

  onTitleChange(event) {
    this.setState({ 
      title: event.target.value 
    });
  }

  onInputHandler(event) {
    this.setState({ 
      body: event.target.innerHTML 
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

  onCancelHandler() {
    toast('Yah... nggak jadi buat catatan.', {
      icon: <FaRegFaceSadTear />,
    })
  }

  render() {
    return (
      <section className='add-new-page'>
        <div className="add-new-page__input">
          <input 
            type="text" 
            className="add-new-page__input__title" 
            placeholder='Ketik Judul Di Sini...' 
            value={this.state.title} 
            onChange={(event) => this.onTitleChange(event)} />
          <div 
            className="add-new-page__input__body" 
            data-placeholder='Dear Catatan, aku ingin mencatat...' 
            contentEditable
            onInput={(event) => this.onInputHandler(event)}
          /> 
        </div>
        <div className="add-new-page__action">
          <Link
            to='/'
            className="action" 
            type='button' 
            title='Batal'
            onClick={this.onCancelHandler}
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

export default NoteInput