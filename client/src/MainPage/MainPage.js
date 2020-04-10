import React from "react";
import GridLayout from "../Components Library/Grid/GridLayout";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import TimeLine from "../Timeline/Timeline";
import Experience from "../Experience/Experience";

import "./MainPage.scss";
const MainPage = () => {
  return (
    <GridLayout className="mainParent">
      <header>
        <HeaderBanner />
      </header>
      <section>
        <TimeLine />
      </section>
      <main>
        <Experience />
      </main>
      <footer></footer>
    </GridLayout>
  );
};

export default MainPage;
