import React from "react";

export default function COntactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div> {email} </div>
      </div>
    </div>
  );
}
