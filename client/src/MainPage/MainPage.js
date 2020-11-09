import React, { useState } from "react";
import PropTypes from "prop-types";
import GridLayout from "../Components Library/Grid/GridLayout";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import TimeLine from "../Timeline/Timeline";
import Experience from "../Experience/Experience";
import SkillsCapsule from "../SkillsCapsule/SkillsCapsule";
import { ThemeProvider } from "styled-components";
import RoundFloatingButton from "../Components Library/RoundFloatingButton/RoundFloatingButton";
import { lightTheme, darkTheme } from "../Theme/Theme";
import styled from "styled-components";
import experience from "../data";
import {
  faEnvelopeOpenText,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainPage.scss";
import CustomModal from "../Components Library/Modal";
import EmailForm from "../EmailForm/EmailForm";
import sendEmail from "../utils/EmailUtil";

const themeMapper = {
  light: lightTheme,
  dark: darkTheme,
};

const MainPage = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [show, setShow] = useState(false);
  const [currentEmployer, setCurrentEmployer] = useState(0);
  const experienceDetails = experience[currentEmployer];
  const totalEmployers = experience.length;
  window.scrollTo(0, 0);
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
            handleOtherEmployerClick={setCurrentEmployer}
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
        <RoundFloatingButton
          icon={<FontAwesomeIcon icon={faCommentDots} size="2x" />}
          hoverText="Let's talk more"
          handleClick={() => {
            setShow(true);
          }}
        />
        <CustomModal
          show={show}
          heading="Excited to hear from you!"
          handleCancel={() => {
            setShow(false);
          }}
          handleSubmit={() => {
            alert("you have clicked submit");
            setShow(false);
          }}
        >
          <EmailForm
            handleSend={(values) => {
              sendEmail(values);
            }}
          />
        </CustomModal>
      </MainParentWithBG>
    </ThemeProvider>
  );
};

const MainParentWithBG = styled(GridLayout)`
  background-color: ${({ theme }) => theme.colors.mainBgColor};
  color: ${({ theme }) => theme.colors.defaultFont};
`;

export default MainPage;
