import React from "react";
import styled from "@emotion/styled";

export default function Contact(props) {
  return (
    <Person className="person">
      <Profile
        className="profile"
        src={props.imageUrl}
        alt={props.imageCaption}
      />
      <Bio className="bio">
        <Name className="name">{props.bio.name}</Name>
        <li className="hometown">Hometown: {props.bio.hometown}</li>
        <li className="skills">Skills: {props.bio.skills}</li>
      </Bio>
    </Person>
  );
}

/* CONTACT PAGE CSS */

const Profile = styled.img`
  height: 300px;
  position: relative;
`;

const Person = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Bio = styled.ul`
  list-style-type: none;
  padding: 20px;
  position: relative;
  text-align: left;
`;

const Name = styled.li`
  font-size: 30px;
`;
