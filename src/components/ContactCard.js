import React from "react";
// import user from '../'


export default function COntactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
    <img className='ui image avtar' src="l" alt="image" />
    <div className="content">
      <div className="header">{name}</div>
      <div>{email}</div>
    </div>
    <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}} 
      onClick={()=>{props.deleteContact(id)}}
    />

    </div>
      
  );
}
