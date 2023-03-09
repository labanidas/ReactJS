import React,{useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
// import {useHistory} from 'react-router-dom';


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
    const navigate = useNavigate();
    function formSubmit(e){
        
        props.onAdd(contact);
        setContact({
            name:"",
            email:""
        })
        e.preventDefault();
        navigate("/");
    }
    

    return (
    <div className='ui main'>
    <h2>Add Contact</h2>
    <Link to='/'>
      <button className='ui button blue right'>Contact List</button>
    </Link>
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