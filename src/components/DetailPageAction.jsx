import React from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';
import ArchiveButton from './ArchiveButton';

function DetailPageAction({ 
  id, 
  archived, 
  isArchived, 
  onDelete 
}) {
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
        onClick={() => onDelete(id)}
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