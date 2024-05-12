import React, { Component } from 'react';
import { HiX, HiCheck } from 'react-icons/hi';
import { BiWinkSmile } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

class NoteEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.note.title,
      body: props.note.body,
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
      toast.error('Tidak bisa menyimpan catatan kosong!')
    } else {
      this.props.editNote({ 
        id: this.props.id,
        title,
        body
      })
    }
  }

  onCancelHandler() {
    toast('Catatan tidak berubah.', {
      icon: <BiWinkSmile />,
    })
  }

  render() {
    return (
      <section className='add-new-page'>
        <Toaster />
        <div className="add-new-page__input">
          <input 
            type="text" 
            className="add-new-page__input__title" 
            placeholder='Ketik Judul Di Sini...' 
            value={this.state.title} 
            onChange={(event) => this.onTitleChange(event)} />
          <div 
            className="add-new-page__input__body" 
            data-placeholder='Dear Catatan, aku ingin mengubah catatan...' 
            contentEditable
            onInput={(event) => this.onInputHandler(event)}
            dangerouslySetInnerHTML={{ __html: this.state.body }}
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

NoteEdit.propTypes = {
  id: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
  editNote: PropTypes.func.isRequired,
}

export default NoteEdit