import React from "react";
import Header from "../../Header/Header";
import Appointment from "../../Messege/Messege";
import Messege from "../../Messege/Messege";
import Reviews from "../../Reviews/Reviews";
import ScrenCare from "../../ScrenCare/ScrenCare";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ScrenCare></ScrenCare>
      <Reviews></Reviews>
      <Appointment></Appointment>
  
    </div>
  );
};

export default Home;
