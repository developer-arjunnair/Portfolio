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
  faCommentDots,
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MainPage.scss";
import CustomModal from "../Components Library/Modal";
import EmailForm from "../EmailForm/EmailForm";
import sendEmail from "../utils/EmailUtil";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const themeMapper = {
  light: lightTheme,
  dark: darkTheme,
};

const MainPage = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
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
        >
          <EmailForm
            handleSend={(values) => {
              sendEmail(values)
                .then(() => {
                  setShow(false);
                  setSubmitSuccess(true);
                  setShowToast(true);
                })
                .catch(() => {
                  setShow(false);
                  setSubmitSuccess(false);
                  setShowToast(true);
                });
            }}
          />
        </CustomModal>
        <CustomModal
          show={showToast}
          heading={
            submitSuccess ? (
              <p className="h3">
                <FontAwesomeIcon icon={faCheckCircle} size="" /> Delivered
              </p>
            ) : (
              <p className="h3">
                <FontAwesomeIcon icon={faExclamationTriangle} size="" /> Oops!
                Something went wrong
              </p>
            )
          }
          handleCancel={() => {
            setShowToast(false);
          }}
        >
          <Container className="lead">
            <Row>
              <Col>
                {submitSuccess
                  ? "Thanks for your email. I will be responding A.S.A.P"
                  : "Hmmm.. Could you try once again? Sorry about the trouble"}
              </Col>
            </Row>
          </Container>
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
