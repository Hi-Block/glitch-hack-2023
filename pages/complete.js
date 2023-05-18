import React from "react";
import NavBar from "/components/navBar/navBar";
// import SurveyBox from "/components/surveyBox";
import Footer from "/components/footer/footer";
import MoreButton from "/components/moreButton/moreButton";
const HomePage = () => {
  return (
    <div>
      <NavBar />
      {/* <SurveyBox /> */}
      <MoreButton />
      <Footer />
    </div>
  );
};

export default HomePage;
