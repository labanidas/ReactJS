import React from 'react';

export default function AddContact(){
    return (
    <div className='ui main'>
    <h2>Add Contact</h2>
    <form className='ui form'>
        <div className='field'>
            <label>Name</label>
            <input type='text' name="name" placeholder='Enter Name' />
        </div>
        <div className='field'>
            <label>Email</label>
            <input type='text' name="email" placeholder='Enter Name' />
        </div>

        <button className='ui button blue'>Save</button>
    </form>

    </div>
    )}