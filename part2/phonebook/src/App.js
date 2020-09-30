import React, { useState, useEffect } from 'react';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';
import Notification from './components/Notification';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterTerm, setFilterTerm] = useState('art');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(intitalPersons => {
        setPersons(intitalPersons)
      })
    
  }, [])

  

  const addPerson = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber
    }

    const nameExists = persons.filter(person => person.name === newName).length;

    if (nameExists) {
      const person = persons.find(person => person.name === newName)
      alert(`${newName} is already added to phone book confirm you want to change the number`)
      updateNumber(person.id, personObject)

    }
    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        setMessage(`Added ${newName}`)
        setMessageType("success")
        setTimeout(() => {
          setMessage("")
          setMessageType("")
        }, 5000)
    }
    setNewName('');
  }

  const removePerson = (id) => {
    personService
      .remove(id)
      .then(deletedPersons => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  const updateNumber = (id, personObject) => {
    personService
      .update(id, personObject)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id === id ? personObject : person))
      })
      .catch(error=> {
        setMessage(`Note ${newName} was already deleted`)
        setMessageType("error")
        setTimeout(() => {
          setMessage("")
          setMessageType("")
        }, 5000)
      })
      setMessage(`Updated ${newName}'s number`)
        setMessageType("success")
        setTimeout(() => {
          setMessage("")
          setMessageType("")
        }, 5000)
  }

  const handleNewName = (event) => {

    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterTermInput = (event) => {
    setFilterTerm(event.target.value);
  }

  const handleDelete = (id) => {
    console.log(id);
    removePerson(id);
  }

  

  const personsToShow = persons.filter((person) => {
    if (person.name.toLowerCase().includes(filterTerm.toLowerCase())) {
      return true
    }
    else {
      return false
    }
  }
  )


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={messageType}/>
      <Filter filterTerm={filterTerm} handleFilterTermInput={handleFilterTermInput} />

      <h2>Add a New</h2>
      <PersonForm
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
        addPerson={addPerson}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App