import React from 'react';
import Person from './Person';

const Persons = (props) => {
  return (
    <div>
    {props.personsToShow.map((person) =>
      <Person 
        key={person.name} 
        person={person}
        handleDelete={props.handleDelete}
      />)}

         
    </div>
  )
}

export default Persons