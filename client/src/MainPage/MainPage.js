import React, { useState } from "react";
import PropTypes from "prop-types";
import GridLayout from "../Components Library/Grid/GridLayout";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import TimeLine, { companies } from "../Timeline/Timeline";
import Experience from "../Experience/Experience";
import SkillsCapsule from "../SkillsCapsule/SkillsCapsule";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../Theme/Theme";
import styled from "styled-components";
import experience from "../data";
import "./MainPage.scss";

const themeMapper = {
  light: lightTheme,
  dark: darkTheme,
};

const MainPage = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const [currentEmployer, setCurrentEmployer] = useState(0);
  const experienceDetails = experience[currentEmployer];
  const totalEmployers = experience.length;
  return (
    <ThemeProvider theme={themeMapper[currentTheme]}>
      <MainParentWithBG className="mainParent">
        <header>
          <HeaderBanner
            handleToggleTheme={(checked) => {
              setCurrentTheme(() => (checked ? "dark" : "light"));
            }}
          />
        </header>
        <section>
          <TimeLine
            nextCompany={experienceDetails.nextEmpId}
            previousCompany={experienceDetails.prevEmpId}
            currentCompany={experienceDetails.id}
            nextEmpIndex={(currentEmployer + 1) % totalEmployers}
            prevEmpIndex={(currentEmployer - 1) % totalEmployers}
            timeSpan={`${experienceDetails.from} - ${experienceDetails.to}`}
            handleOtherEmployerClick={(empIndex) => {
              setCurrentEmployer(() => empIndex);
            }}
          />
        </section>
        <main>
          <Experience
            title={experienceDetails.employer}
            details={experienceDetails.details}
            currentEmpId={experienceDetails.id}
          />
        </main>
        <footer>
          <SkillsCapsule skillsSet={experienceDetails.skillsSet} />
        </footer>
      </MainParentWithBG>
    </ThemeProvider>
  );
};

const MainParentWithBG = styled(GridLayout)`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  color: ${({ theme }) => theme.colors.defaultFont};
`;

export default MainPage;
