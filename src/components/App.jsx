import React from "react";
import { nanoid } from "nanoid";
import { Form } from "./Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import  {useState,useEffect}  from 'react';

 export function  App () {
  
  const [contacts, setContacts] = useState([
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]);
  const [filter, setFilter] = useState('');
  

  const formSubmitHandler = data => {
    const searchSameName = contacts.some(
      cont => cont.name.toLowerCase() === data.name.toLowerCase()
    );

    if (searchSameName) {
      alert(`${data.name} is already in contacts`);
    } else if (data.name.length === 0) {
      alert("Fields must be filled!");
    } else {
    const contact = {
      ...data,
      id:nanoid()
    };
    setContacts (prevState => (
         [...prevState, contact]
    ) );
    }
    };
    
    
    const changeFilter = (filter) => {
      setFilter (filter)
    }
    
  
    const getVisibleContacts = () => {
      return contacts.filter((contacts) =>
        contacts.name.toLowerCase().includes(filter.toLowerCase())
      );
    };
  
    const removeContact = (contactId) => {
     setContacts(contacts.filter(({ id }) => id !== contactId))
    };

useEffect(()=>{
  const contactsList = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contactsList);

  if (parsedContacts) {
    setContacts(parsedContacts);
  }
},[])

    useEffect(()=>{
        localStorage.setItem('contacts', JSON.stringify(contacts));
    },[contacts])
  const visibleContacts = getVisibleContacts();
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <>
      <Form onSubmit = {formSubmitHandler}/>
      <h2>Contacts</h2>
        {
          <Filter value={filter} onChangeFilter={changeFilter} />
        }
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={removeContact}
          />
        )}
      </>
    </div>
  );
    }