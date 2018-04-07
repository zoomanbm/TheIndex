import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSpinner from '@fortawesome/fontawesome-free-solid/faSpinner'

function Loading(props) {
  return (
    <div className="mx-auto text-center">
      <FontAwesomeIcon icon={faSpinner} spin size="4x"/>
    </div>
  );
}

export default Loading;
