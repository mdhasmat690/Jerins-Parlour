import React from "react";
import Header from "../../Header/Header";
import Appointment from "../../Messege/Messege";
import Messege from "../../Messege/Messege";
import Reviews from "../../Reviews/Reviews";
import ScrenCare from "../../ScrenCare/ScrenCare";
import Blog from "../../ServiceMenue/Blog";
import Time from "../../ServiceMenue/Time";
import Services from "../../Services/Services/Services";
import CustomrsReview from "../../Test/CustomrsReview";
import Philosophy from "../../Test/Philosophy";
import Test1 from "../../Test/Test1";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ScrenCare></ScrenCare>
      <Reviews></Reviews>
      <Blog></Blog>
      <Philosophy></Philosophy>
      <Test1></Test1>
      <Time></Time>
      <CustomrsReview></CustomrsReview>
      <Appointment></Appointment>
  
    </div>
  );
};

export default Home;
