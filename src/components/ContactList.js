import React from 'react';
import ContactCard from './ContactCard';


export default function ContactList(props){

return(
    <>
    {props.contacts.map(contact =>(
        <ContactCard contact={contact} 
          key={contact.id}  
          deleteContact={props.deleteContact}
        />
))}
</>

)}