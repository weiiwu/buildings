import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import AwardedDesigns from "../components/AwardedDesigns";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="glorious buildings"
          subtitle="building office baptiste at $100/unit"
        >
          <Link to="/buildings" className="btn-primary">
            more info
          </Link>
        </Banner>
      </Hero>
      <Services />
      <AwardedDesigns />
    </>
  );
}
