import React from "react";

import NavBar from "./NavBar";
import Couple from "./Couple";
import SimpleSlider from "./Hero";
// import Story from "../Story";
// import Welcome from "../WelcomeArea";
// import People from "../People";
// import Location from "../Location";
// import Gallery from "../Gallery";
// import Rsvp from "../RSVP";
// import Saveday from "../Countdown";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <SimpleSlider />
      {/* <Saveday /> */}
      <Couple />
      {/* <Welcome /> */}
      {/* <Story /> */}
      {/* <People /> */}
      {/* <Gallery /> */}
      {/* <Rsvp /> */}
    </div>
  );
};

export default HomePage;
