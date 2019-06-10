import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/building-1.jpg";
import PropTypes from "prop-types";

export default function Building({ building }) {
  const { name, slug, images, price } = building;

  return (
    <article className="building">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per unit</p>
        </div>
        <Link to={`/buildings/${slug}`} className="btn-primary building-link">
          Awards
        </Link>
      </div>
      <p className="building-info">{name}</p>
    </article>
  );
}

Building.propTypes = {
  building: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
