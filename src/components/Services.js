import React, { Component } from "react";
import { FaWrench, FaCubes, FaEdit, FaLock } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaWrench />,
        title: "commercial renovations",
        info:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit non tempor"
      },
      {
        icon: <FaCubes />,
        title: "3D perspectives",
        info: "Dapibus viverra neque dictumst netus nulla diam nostra penatibus"
      },
      {
        icon: <FaEdit />,
        title: "interior design",
        info: "Arcu suscipit congue aptent lacus massa tincidunt ultricies cras"
      },
      {
        icon: <FaLock />,
        title: "insurance packages",
        info:
          "Dictum vitae litora gravida molestie cum integer torquent aenean at"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
