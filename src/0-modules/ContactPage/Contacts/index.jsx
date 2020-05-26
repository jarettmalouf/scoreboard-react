import React, { useState } from "react";

import Contact from "./Contact";
import styled from "@emotion/styled";

export default function Contacts() {
  const [contacts] = useState([
    {
      imageUrl: "../images/jarett.jpeg",
      imageCaption: "The only good photo of Jarett Malouf",
      bio: {
        name: "Jarett Malouf",
        hometown: "Los Angeles, CA",
        skills: "Can increment any number by 1",
      },
    },
    {
      imageUrl: "../images/benji.jpg",
      imageCaption: "A classically good photo of Benji Bear",
      bio: {
        name: "Benji Bear",
        hometown: "Rockford, IL",
        skills: "Can do basically anything",
      },
    },
  ]);

  return (
    <React.Fragment>
      <ContactPage className="contact-page">
        {contacts.map((contact) => (
          <Contact {...contact} />
        ))}
      </ContactPage>
    </React.Fragment>
  );
}

/* CONTACT PAGE */

const ContactPage = styled.div`
  color: rgb(47, 179, 240);
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
