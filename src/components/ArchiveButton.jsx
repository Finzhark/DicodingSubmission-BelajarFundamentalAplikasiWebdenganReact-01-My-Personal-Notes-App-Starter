import React from 'react';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { toast } from 'react-hot-toast'
import PropTypes from 'prop-types';

function ArchiveButton({ 
  id, 
  archived, 
  isArchived 
}) {
  if (archived) {
    const onUnarchiveHandler = () => {
      isArchived(id)
      toast.success(`Berhasil mengaktifkan catatan.`, {
        icon: <BiArchiveOut />
      })
    }
    return (
      <button 
        className="action" 
        type='button' 
        title='unArchive' 
        onClick={onUnarchiveHandler}
      >
        <BiArchiveOut />
      </button>
    )
  } else {
    const onArchiveHandler = () => {
      isArchived(id)
      toast(`Berhasil mengarsipkan catatan.`, {
        icon: <BiArchiveIn />
    })
    }
    return (
      <button 
        className="action" 
        type='button' 
        title='Archived' 
        onClick={onArchiveHandler}
      >
        <BiArchiveIn />
      </button>
    )
  }
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  isArchived: PropTypes.func.isRequired,
}

export default ArchiveButton