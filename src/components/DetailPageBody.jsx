import React from 'react';
import { showFormattedDate } from '../utils/index';
import parse from'html-react-parser';
import PropTypes from 'prop-types';

function DetailPageBody({ 
  note 
}) {
  return (
    <section>
      <h3 className="detail-page__title">
        {note.title}
      </h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <div 
        className="detail-page__body">
        <p>
          {parse(note.body)}
        </p>
      </div>
    </section>
  )
}

DetailPageBody.propTypes = {
  note: PropTypes.object.isRequired,
}

export default DetailPageBody