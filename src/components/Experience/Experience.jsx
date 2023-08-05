import React from "react";
import "./experience.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { FaCss3 } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { BiLogoNodejs } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { BiLogoRedux } from "react-icons/bi";
import { SiAmazonaws } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { BiLogoDocker } from "react-icons/bi";
import { BiLogoKubernetes } from "react-icons/bi";
import { SiPrometheus } from "react-icons/si";
import { SiGrafana } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        {/* Frontend */}
        <div className="experience__box">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__detail-icon" />
              <h4 className="text-light">HTML</h4>
            </article>

            <article className="experience__details">
              <DiJavascript1 className="experience__detail-icon" />
              <h4 className="text-light">JavaScript</h4>
            </article>

            <article className="experience__details">
              <FaCss3 className="experience__detail-icon" />
              <h4 className="text-light">CSS</h4>
            </article>

            <article className="experience__details">
              <BsBootstrap className="experience__detail-icon" />
              <h4 className="text-light">Bootstrap</h4>
            </article>

            <article className="experience__details">
              <FaReact className="experience__detail-icon" />
              <h4 className="text-light">React</h4>
            </article>

            <article className="experience__details">
              <DiJqueryLogo className="experience__detail-icon" />
              <h4 className="text-light">Jquery</h4>
            </article>
          </div>
        </div>

        {/* Backend */}
        <div className="experience__box">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiLogoNodejs className="experience__detail-icon" />
              <h4 className="text-light">Node.js</h4>
            </article>

            <article className="experience__details">
              <SiExpress className="experience__detail-icon" />
              <h4 className="text-light">Express.js</h4>
            </article>

            <article className="experience__details">
              <GrMysql className="experience__detail-icon" />
              <h4 className="text-light">MySQL</h4>
            </article>

            <article className="experience__details">
              <DiMongodb className="experience__detail-icon" />
              <h4 className="text-light">NoSQL-MongoDB</h4>
            </article>

            <article className="experience__details">
              <GrGraphQl className="experience__detail-icon" />
              <h4 className="text-light">GraphQL</h4>
            </article>

            <article className="experience__details">
              <BiLogoRedux className="experience__detail-icon" />
              <h4 className="text-light">Redux</h4>
            </article>
          </div>
        </div>

        <div className="experience__box">
          <h3>Cloud Engineering</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiAmazonaws className="experience__detail-icon" />
              <h4 className="text-light">AWS</h4>
            </article>
            <article className="experience__details">
              <SiTerraform className="experience__detail-icon" />
              <h4 className="text-light">Terraform</h4>
            </article>
            <article className="experience__details">
              <BiLogoDocker className="experience__detail-icon" />
              <h4 className="text-light">Docker</h4>
            </article>
            <article className="experience__details">
              <BiLogoKubernetes className="experience__detail-icon" />
              <h4 className="text-light">Kubernetes</h4>
            </article>
            <article className="experience__details">
              <SiGrafana className="experience__detail-icon" />
              <h4 className="text-light">Grafana</h4>
            </article>
            <article className="experience__details">
              <SiPrometheus className="experience__detail-icon" />
              <h4 className="text-light">Promentheus</h4>
            </article>
    

            {/* Add other cloud-related technologies/icons here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
