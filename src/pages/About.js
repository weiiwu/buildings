import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const About = () => {
  return (
    <>
      <Hero hero="aboutHero">
        <Banner title="straya architecture" />
      </Hero>
      <section>
        <article className="about-us">
          <h3>about us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </article>
        <article className="about-us">
          <h3>our history</h3>
          <p>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus.
          </p>
        </article>
        <article className="about-us">
          <h3>our future</h3>
          <p>
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi.
          </p>
        </article>
        <article className="about-us">
          <h3>Reference</h3>
          <p>Coding Addict</p>
        </article>
      </section>
    </>
  );
};

export default About;
