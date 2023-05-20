import React from "react";
import { NavBar } from "../components/navBar/navBar";
import { SurveyBox } from "../components/surveyBox/surveyBox";
import { Footer } from "../components/footer/footer";
import { MoreButton } from "../components/moreButton/moreButton";
export default function Home() {
  const currentPage = "Complete";
  return (
    <div>
      <NavBar currentPage={currentPage} />
      <SurveyBox />
      <MoreButton />
      <Footer />
    </div>
  );
}
