import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "../Title/title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free coctails",
        info:
          "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttleVan",
        info: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      },
      {
        icon: <FaBeer />,
        title: "free Beer",
        info: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
