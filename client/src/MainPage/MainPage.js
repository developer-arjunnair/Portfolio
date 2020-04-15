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

import "./MainPage.scss";

const themeMapper = {
  light: lightTheme,
  dark: darkTheme,
};

const MainPage = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  return (
    <ThemeProvider theme={themeMapper[currentTheme]}>
      <MainParentWithBG className="mainParent">
        <header>
          <HeaderBanner
            handleToggleTheme={(checked) => {
              setCurrentTheme(() => (checked ? "light" : "dark"));
            }}
          />
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
      </MainParentWithBG>
    </ThemeProvider>
  );
};

const MainParentWithBG = styled(GridLayout)`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  color: ${({ theme }) => theme.colors.defaultFont};
`;

MainPage.propTypes = {
  currentTheme: PropTypes.string,
};
MainPage.defaultProps = {
  currentTheme: "light",
};
export default MainPage;
