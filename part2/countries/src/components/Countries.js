import React from 'react';
import Country from './Country';

const Countries = (props) => {
  const numberOfCountries = props.countriesToShow.length;
  if(numberOfCountries <= 10){
    return (
      <div>
        {props.countriesToShow.map((country) => 
        <Country setSearchTerm={props.setSearchTerm} key={country.name} country={country} numberOfCountries={numberOfCountries}/>)}
      </div>
    )
  }
  else{
    return (
      <div>
        <p>Too many coutnries return increase search term</p>
      </div>
    )
  }
  
}


export default Countries;