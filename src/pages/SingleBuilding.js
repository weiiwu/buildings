import React, { Component } from "react";
import defaultBcg from "../images/building-1.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { BuildingContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleBuilding extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = BuildingContext;
  //componentDidMount() {}

  render() {
    const { getBuilding } = this.context;
    const building = getBuilding(this.state.slug);
    if (!building) {
      return (
        <div className="error">
          <h3>No Building Found</h3>
          <Link to="/buildings" className="btn-primary">
            back
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      level,
      size,
      price,
      features,
      investment,
      smoking,
      images
    } = building;

    const [mainImg] = images;

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} building`}>
            <Link to="/buildings" className="btn-primary">
              back
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-building">
          <div className="single-building-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-building-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}/unit</h6>
              <h6>
                land size: {size}m<sup>2</sup>
              </h6>
              <h6>{level} level(s)</h6>
              <h6>{smoking > 1 ? "smoking allowed" : "no smoking allowed"}</h6>
              <h6>{investment && "high return investment"}</h6>
            </article>
          </div>
        </section>
        <section className="building-features">
          <h6>features</h6>
          <ul className="features">
            {features.map((item, index) => {
              return <li key={index}>-{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
