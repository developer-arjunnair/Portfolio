import React from "react";
import GridLayout from "../Components Library/GridLayout";
import HeaderBanner from "../HeaderBanner/HeaderBanner";
import "./MainPage.scss";
const MainPage = () => {
  return (
    <main>
      <GridLayout>
        <HeaderBanner />
      </GridLayout>
    </main>
  );
};

export default MainPage;
