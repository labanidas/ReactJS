import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';


export default function ContactList(props){

    
  const contacts = [
    {   
      id:1,
      name:'Labani Das',
      email: 'labani@gmail.com'
    },
    {
      id:2,
      name:'Rima Das',
      email: 'rima@gmail.com'
    }
  ]

return(
    <>
    <Link to='/add'>
      <button className='ui button blue right'>Add Contact</button>
    </Link>
    {props.contacts.map(contact =>(
        <ContactCard contact={contact} 
          key={contact.id}  
          deleteContact={props.deleteContact}
        />
))}
</>

)}