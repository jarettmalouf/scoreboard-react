import Contacts from "./components/contacts";
import Footer from "./components/footer";
import NavBar from "./components/navBar";
import React from "react";
import TitleBar from "./components/titleBar";

function ContactPage() {
  return (
    <div>
      <NavBar />
      <TitleBar titleBar="contact" />
      <Contacts />
      <Footer />
    </div>
  );
}

export default ContactPage;
