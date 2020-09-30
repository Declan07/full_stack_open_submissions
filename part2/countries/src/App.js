import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';

const App = () => {
  

  const[countries, setCountries] = useState([])
  const[searchTerm, setSearchTerm] = useState('');
   
  const countriesUrl = 'https://restcountries.eu/rest/v2/all'

  useEffect(() => {
    axios
      .get(countriesUrl)
      .then(response =>{
        setCountries(response.data)
      })
  }, [])

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  }

  const countriesToShow = countries.filter((country) => {
    if (country.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true
    }
    else {
      return false
    }
  }
  );
  
  return (
    
    <div>
      <div>
        Find countries <input value={searchTerm} onChange={handleSearchInput}></input>
      </div>
      <Countries setSearchTerm={setSearchTerm} countriesToShow={countriesToShow}/>
    </div>
  )
}

export default App