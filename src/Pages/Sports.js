import Footer from "../components/footer";
import NavBar from "../components/navBar";
import React from "react";
import SportsList from "../components/sportsList";
import TitleBar from "../components/titleBar";

function Sports() {
  return (
    <div>
      <NavBar />
      <TitleBar titleBar="sports" />
      <SportsList />
      <Footer />
    </div>
  );
}

export default Sports;
