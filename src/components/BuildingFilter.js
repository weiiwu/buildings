import React from "react";
import { useContext } from "react";
import { BuildingContext } from "../context";
import Title from "../components/Title";

// get unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function BuildingFilter({ buildings }) {
  const context = useContext(BuildingContext);
  //console.log(context);

  const {
    handleChange,
    type,
    level,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    investment,
    smoking
  } = context;

  // type
  let types = getUnique(buildings, "type");
  // all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let levels = getUnique(buildings, "level");
  levels = levels.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search buildings" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">building type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="level">level</label>
          <select
            name="level"
            id="level"
            value={level}
            className="form-control"
            onChange={handleChange}
          >
            {levels}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">price ${price}/unit</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">
            land size(m<sup>2</sup>)
          </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="investment"
              id="investment"
              checked={investment}
              onChange={handleChange}
            />{" "}
            <lable htmlFor="investment">investment</lable>
          </div>

          <div className="single-extra">
            <input
              type="checkbox"
              name="smoking"
              id="smoking"
              checked={smoking}
              onChange={handleChange}
            />{" "}
            <lable htmlFor="smoking">smoking</lable>
          </div>
        </div>
      </form>
    </section>
  );
}
