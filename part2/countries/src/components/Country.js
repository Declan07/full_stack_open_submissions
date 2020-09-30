import React from 'react';
import ShowCountryButton from './ShowCountryButton';
import Weather from './Weather';

const Country = ({country, numberOfCountries, setSearchTerm}) => {
  if (numberOfCountries > 1) {
    return(
      <div>
        <p>{country.name}<ShowCountryButton countryName={country.name} setSearchTerm={setSearchTerm}/></p>
        
      </div>
    )
  }
  else{
    return(
      <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>Languages</h2>
        <ul>
          {country.languages.map((language)=> <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={country.flag} alt={country.name} width="150" height="90" />
        <h2>{country.capital} Weather</h2>
        <Weather capital={country.capital}/>

      </div>
    )
  }
}

export default Country;