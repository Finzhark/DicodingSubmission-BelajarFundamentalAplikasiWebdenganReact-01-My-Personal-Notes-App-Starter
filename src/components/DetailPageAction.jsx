import React from 'react';
import { toast } from 'react-hot-toast'
import { MdOutlineDeleteForever } from 'react-icons/md';
import { BiHappyBeaming } from "react-icons/bi";
import ArchiveButton from './ArchiveButton';
import PropTypes from 'prop-types';

function DetailPageAction({ 
  id, 
  archived, 
  isArchived, 
  onDelete 
}) {
  const onDeleteHandler = () => {
    toast((t) => (
      <span>
        Ingin menghapus catatan ini? <br/>
        <button
          className='toast_button btn-delete' 
          onClick={() => {
            onDelete(id)
            toast.dismiss()
            toast('Catatan berhasil dihapus!', {
              icon: <MdOutlineDeleteForever />
            })
          }}
        >
          Iya
        </button>
        <button 
          className='toast_button btn-stillhere'
          onClick={() => {
            toast.remove()
            toast('Tenang, catatannya masih ada!', {
              duration: 1000,
              icon: <BiHappyBeaming />,
            })
          }}
        >JANGAN!</button>
      </span>
    ))
  }
  return (
    <div className="detail-page__action">
      <ArchiveButton 
        id={id} 
        archived={archived} 
        isArchived={isArchived} 
      />
      <button 
        className="action" 
        type='button' 
        title='Delete' 
        onClick={onDeleteHandler}
      >
        <MdOutlineDeleteForever />
      </button>
    </div>
  )
}

DetailPageAction.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,

}

export default DetailPageAction