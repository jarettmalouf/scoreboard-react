import Contacts from "./Contacts";
import React from "react";
import TitleBar from "../../1-helpers/TitleBar";

function ContactPage() {
  return (
    <div>
      <TitleBar titleBar="contact" />
      <Contacts />
    </div>
  );
}

export default ContactPage;
