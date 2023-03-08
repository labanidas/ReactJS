import React,{useState} from 'react';

export default function AddContact(props){

    const [contact,setContact] = useState({
        name:"",
        email:""
    });

    function changeHandler(event){
        const{ name, value } = event.target;
        setContact(prevState=>{
            return{
                ...prevState,
                [name] : value
            }
        })
    }

    function formSubmit(e){
        props.onAdd(contact);
        setContact({
            name:"",
            email:""
        })
        e.preventDefault();
    }

    return (
    <div className='ui main'>
    <h2>Add Contact</h2>
    <form className='ui form' onSubmit={formSubmit}>
        <div className='field'>
            <label>Name</label>
            <input type='text' name="name" placeholder='Enter Name' value={contact.name} onChange={changeHandler} required/>
        </div>
        <div className='field'>
            <label>Email</label>
            <input type='text' name="email" placeholder='Enter Name' value={contact.email} onChange={changeHandler} required/>
        </div>

        <button type="submit" className='ui button blue'>Save</button>
    </form>

    </div>
    )}