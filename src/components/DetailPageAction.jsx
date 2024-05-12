import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast'
import { MdOutlineDeleteForever, MdModeEdit } from 'react-icons/md';
import { BiHappyBeaming } from "react-icons/bi";
import ArchiveButton from './ArchiveButton';
import PropTypes from 'prop-types';

function DetailPageAction({ 
  id, 
  archived, 
  isArchived, 
  onDelete,
  onEdit 
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
          Ya
        </button>
        <button 
          className='toast_button btn-cancel'
          onClick={() => {
            toast.remove()
            toast('Tenang, catatannya masih ada!', {
              duration: 1000,
              icon: <BiHappyBeaming />,
            })
          }}
        >Tidak</button>
      </span>
    ), {
      duration: 3000,
    })
  }

  const onEditHandler = () => {
    onEdit(id)
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
        title='Sunting' 
        onClick={onEditHandler}
      >
        <MdModeEdit />
      </button>
      <button 
        className="action" 
        type='button' 
        title='Hapus' 
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
  onEdit: PropTypes.func.isRequired,
}

export default DetailPageAction