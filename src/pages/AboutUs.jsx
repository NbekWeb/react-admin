import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <section
      className="sec1"
      style={{
        backgroundImage:
          "url('/img/telegram-cloud-photo-size-2-5271946114322522287-y 1.png')",
      }}
    >
      <div className="sec1-bg"></div>
      <div className="sec1-container-bg" style={{ bottom: 0 }}></div>
      <div className="container">
        <div className="head-mob">
          <ul className="head-menu">
            <li>
              <NavLink to="/aboutUs">О нас</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Контакты</NavLink>
            </li>
            <li>
              <NavLink to="/vakansi">Вакансии</NavLink>
            </li>
          </ul>
        </div>
        <div className="sec1-container sec2-container">
          <div className="sec1-container-text">
            <h1>О нас</h1>
            <p>
              We believe that every brand has a unique story to tell, and we
              strive to bring that story to life through innovative solutions.
              From concept to implementation, we work hand-in-hand with our
              clients to develop innovative digital products and create a
              compelling online presence that sets them apart from the
              competition.
            </p>
            <p>
              We believe that every brand has a unique story to tell, and we
              strive to bring that story to life through innovative solutions.
              From concept to implementation, we work hand-in-hand with our
              clients to develop innovative digital products and create a
              compelling online presence that sets them apart from the
              competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
