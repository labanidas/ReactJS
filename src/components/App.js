import '../App.css';
import {v4 as uuid} from 'uuid';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';


  // console.log(process.env.REACT_APP_LOCAL_STORAGE_KEY);

function App() {

  const [contacts, setContacts] = useState([]);
  
  function addContact(contact){
    setContacts( [...contacts, {id : uuid(), ...contact}]);
  }

  useEffect(()=>{
    const newContacts = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY));
    if(newContacts.length!=0) setContacts(newContacts);
  }, [])


  function deleteContact(id){
    const filteredContacts = contacts.filter((contact)=>{
      return contact.id!== id
    })
    setContacts(filteredContacts)
  }

  useEffect(()=>{
    localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])


  

  

  return (
    <div className='ui container'>
      <Header />
      <AddContact onAdd = {addContact}/>
      <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;
