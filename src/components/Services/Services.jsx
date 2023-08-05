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
            <h3>Web Development • Cloud Engineering</h3>
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
                Cloud Infrastructure Management: Proficient in setting up and
                managing cloud infrastructure using platforms like AWS to ensure
                scalable, secure, and cost-effective solutions.
              </p>
            </li>
            <li>
              <VscWorkspaceTrusted className="service__list-icon" />
              <p>
                DevOps and Continuous Integration/Continuous Deployment (CI/CD):
                Implementing DevOps practices to automate the development,
                testing, and deployment processes, promoting collaboration and
                efficiency within development teams.
              </p>
            </li>
            <li>
              <VscWorkspaceTrusted className="service__list-icon" />
              <p>
                Containerization and Orchestration: Experience in containerizing
                applications using Docker and deploying and managing them with
                container orchestration platforms like Kubernetes, ensuring easy
                scalability and high availability.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
