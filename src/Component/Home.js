import React from "react";
import "../index.css";
import NavBarItem from "../Component/NavBarItem";
import AboutUs from "../Component/AboutUs";
import Slider from "../Component/Slider";
import Card from "../Component/Card";
import VisionMission from "./VisionMission";
import Footer from "./Footer";
import Oem from "./Oem";
import MakeInIndia from "./MakInIndia";
const Home = props => {
  return (
    <div>
      <Oem></Oem>
      <Slider></Slider>
      <VisionMission></VisionMission>
      <MakeInIndia></MakeInIndia>
      <Footer></Footer>
    </div>
  );
};
export default Home;
