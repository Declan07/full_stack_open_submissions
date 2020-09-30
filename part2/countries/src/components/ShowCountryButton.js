import React from 'react';

const ShowCountryButton = ({ setSearchTerm, countryName }) => {

  const handleShowCountryButton = () => {
    console.log(countryName);
    setSearchTerm(countryName);
  }
  return (
    <button onClick={handleShowCountryButton}>Show Country</button>
  )

}

export default ShowCountryButton;