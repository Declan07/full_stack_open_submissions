import React from 'react';

const Filter = (props) => {
  return(
  <div>
    Filter shown with <input value={props.filterTerm} onChange={props.handleFilterTermInput} />
  </div>
  );
}

export default Filter