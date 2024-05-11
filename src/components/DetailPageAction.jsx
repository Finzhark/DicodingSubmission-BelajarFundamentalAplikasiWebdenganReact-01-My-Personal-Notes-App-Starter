import React from 'react';
import { toast } from 'react-hot-toast'
import { MdOutlineDeleteForever } from 'react-icons/md';
import ArchiveButton from './ArchiveButton';
import PropTypes from 'prop-types';

function DetailPageAction({ 
  id, 
  archived, 
  isArchived, 
  onDelete 
}) {
  const onDeleteHandler = () => {
    onDelete(id)
    toast.success('Catatan telah dihapus!')
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
  onDelete: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,

}

export default DetailPageAction