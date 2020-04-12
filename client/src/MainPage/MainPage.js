import React from "react";
import GridLayout from "../Components Library/Grid/GridLayout";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import TimeLine, { companies } from "../Timeline/Timeline";
import Experience from "../Experience/Experience";
import SkillsCapsule from "../SkillsCapsule/SkillsCapsule";

import "./MainPage.scss";
const MainPage = () => {
  return (
    <GridLayout className="mainParent">
      <header>
        <HeaderBanner />
      </header>
      <section>
        <TimeLine nextCompany={companies.Expedia} />
      </section>
      <main>
        <Experience />
      </main>
      <footer>
        <SkillsCapsule />
      </footer>
    </GridLayout>
  );
};

export default MainPage;
