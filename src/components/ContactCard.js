import React from "react";
// import user from '../images/avtar.jpg';
import { Link } from "react-router-dom";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui image avtar" src="l" alt="image" />
      <div className="content">
        {/* <Link to={{pathname:`/contact/${id}`, state: {name: "Labani"}}} > */}
        {/* let url = "/contact/"+id; */}
        <Link to={"/contact/"+id} state={{contact: props.contact}} >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => {
          props.deleteContact(id);
        }}
      />
    </div>
  );
}
