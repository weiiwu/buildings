import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import BuildingContainer from "../components/BuildingContainer";

const Buildings = () => {
  return (
    <>
      <Hero hero="buildingsHero">
        <Banner title="our buildings" />
      </Hero>
      <BuildingContainer />
    </>
  );
};

export default Buildings;
