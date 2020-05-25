import React from "react";

function Contact(props) {
  return (
    <div className="contact">
      <img className="profile" src={props.imageUrl} alt={props.imageCaption} />
      <ul className="bio">
        <li className="name">{props.bio.name}</li>
        <li className="hometown">Hometown: {props.bio.hometown}</li>
        <li className="skills">Skills: {props.bio.skills}</li>
      </ul>
    </div>
  );
}

export default Contact;
