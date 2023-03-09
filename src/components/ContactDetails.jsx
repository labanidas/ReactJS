import React from "react";
// import user from '../images/avtar.jpg';
import { Link, useLocation } from "react-router-dom";





export default function ContactDetail(props) {
    const location = useLocation()
//   const { id, name, email } = props.contact;
// console.log(this.props.location.state)
// console.log(location.state.contact)

const {name,email} = location.state.contact;

  return (
    <div className="main">
    
    <Link to="/">
    <button className='ui button blue right'>
    Contact List
    </button>    
    </Link>

    <Link to="/add">
    <button className='ui button blue right'>    
    Add Contact
    </button> 
    </Link>

        <div className="ui card centered">
            <div className="image">
                <img src="l" alt="image" />
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
        </div>
    </div>
  );
}
