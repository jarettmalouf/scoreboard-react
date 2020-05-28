import Contact from "./Contact";
import React from "react";
import { connect } from "react-redux";
import styled from "@emotion/styled";

export function Contacts(props) {
  return (
    <React.Fragment>
      <ContactPage className="contact-page">
        {props.contacts.map((contact) => (
          <Contact {...contact} />
        ))}
      </ContactPage>
    </React.Fragment>
  );
}

// REDUX

const mapStateToProps = (state) => {
  return { contacts: state.contacts };
};

/* CONTACT PAGE */

const ContactPage = styled.div`
  color: rgb(47, 179, 240);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 80px;
`;

export default connect(mapStateToProps)(Contacts);
