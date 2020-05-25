import Footer from "./components/footer";
import NavBar from "./components/navBar";
import React from "react";
import ScoreBoard from "./components/scoreBoard";
import TitleBar from "./components/titleBar";

function App() {
  return (
    <div>
      <NavBar />
      <TitleBar titleBar="scoreboard" />
      <ScoreBoard />
      <Footer />
    </div>
  );
}

export default App;
