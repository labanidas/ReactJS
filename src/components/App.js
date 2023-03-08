import '../App.css';
import React, {useState} from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';


function App() {

  // const contacts = [
  //   {   
  //     id:1,
  //     name:'Labani Das',
  //     email: 'labani@gmail.com'

  //   },
  //   {
  //     id:2,
  //     name:'Rima Das',
  //     email: 'rima@gmail.com'
  //   }
  // ]

  const [contacts, setContacts] = useState([]);
  
  function addContact(contact){
    setContacts( [...contacts, contact])
  }



  return (
    <div className='ui container'>
      <Header />
      <AddContact onAdd = {addContact}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
