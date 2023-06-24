import React from "react";
import "./services.css";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export const Services = () => {
  return (
    <section id="services">
      <h5>My</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          {/* Web Development */}
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <VscWorkspaceTrusted className="service__list-icon" />
              <p>
                Responsive Website Design: Creating websites that adapt and
                display seamlessly across various devices and screen sizes.
              </p>
            </li>

            <li>
              <VscWorkspaceTrusted className="service__list-icon" />
              <p>
                Custom Web Application Development: Building tailored web
                applications that meet specific client requirements and business
                needs.
              </p>
            </li>

            <li>
              <VscWorkspaceTrusted className="service__list-icon" />
              <p>
                Frontend Development: Expertise in developing intuitive and
                user-friendly user interfaces using modern frontend technologies
                and frameworks.
              </p>
            </li>

            <li>
              <VscWorkspaceTrusted className="service__list-icon" />
              <p>
                Backend Development: Experience in designing and implementing
                server-side logic, APIs, and databases to support dynamic web
                applications.
              </p>
            </li>

            <li>
              <VscWorkspaceTrusted className="service__list-icon" />
              <p>
                Website Maintenance and Support: Providing ongoing support,
                updates, and maintenance services to ensure the smooth
                functioning and security of websites.
              </p>
            </li>

            <li>
              <VscWorkspaceTrusted className="service__list-icon" />
              <p>
                Problem Solving and Debugging: Skilled in identifying and
                resolving issues, bugs, and errors in web applications, ensuring
                optimal performance and functionality.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
