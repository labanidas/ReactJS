import React from 'react';
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
    {props.contacts.map(contact =>(
        <ContactCard contact={contact} 
          key={contact.id}  
          deleteContact={props.deleteContact}
        />
))}
</>

)}