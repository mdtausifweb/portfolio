import "./App.css";
// import axios from "axios";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import User from "./components/User";
// import { useEffect, useState } from "react";
// const { countries, zones } = require("moment-timezone/data/meta/latest.json");
// const timeZoneCityToCountry = {};
function App() {
  // const [timezoneToCountry,settimezoneToCountry]=useState()
  // useEffect(() => {
  //   // console.log(countries, zones);
  //   Object.keys(zones).forEach((z) => {
  //     const cityArr = z.split("/");
  //     const city = cityArr[cityArr.length - 1];
  //     timeZoneCityToCountry[city] = countries[zones[z].countries[0]].name;
  //     console.log(timeZoneCityToCountry[city] = countries[zones[z].countries[0]].name);
  //   });
  // }, [timeZoneCityToCountry]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Profile />
        <About />
        <Skills />
        <Project />
        <User/>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
