import "./Skills.scss";
import Git from "../../assets/images/Git.svg";
import HTML from "../../assets/images/HTML5.svg";
import CSS from "../../assets/images/CSS3.svg";
import Javascript from "../../assets/images/JavaScript.svg";
import SCSS from "../../assets/images/SCSS.svg";
import BEM from "../../assets/images/BEM.svg";
import React from "../../assets/images/React.svg";
import Java from "../../assets/images/Java.svg";
import SpringBoot from "../../assets/images/Spring Boot.svg";
import Layout from "../../components/Layout/Layout";

const Skills = () => {
  return (
    <Layout>
    <section className="skills">
      <h3 className="skills__title">Technical Skills</h3>
      <p className="skills__description">
        A list of coding languages and skills I currently have in my repertoire:
      </p>
      <div className="skills__grid">
        <figure className="skills__grid--item1 skills__image">
          <img src={Git} alt="git" className="skills__picture" />
          <figcaption className="skills__caption">Git</figcaption>
        </figure>
        <figure className="skills__grid--item2 skills__image">
          <img
            src={HTML}
            alt="html5"
            className="skills__picture"
          />
          <figcaption className="skills__caption">HTML5</figcaption>
        </figure>
        <figure className="skills__grid--item3 skills__image">
          <img src={CSS} alt="css3" className="skills__picture" />
          <figcaption className="skills__caption">CSS3</figcaption>
        </figure>
        <figure className="skills__grid--item4 skills__image">
          <img
            src={Javascript}
            alt="javascript"
            className="skills__picture"
          />
          <figcaption className="skills__caption">JavaScript</figcaption>
        </figure>
        <figure className="skills__grid--item5 skills__image">
          <img src={SCSS} alt="scss" className="skills__picture" />
          <figcaption className="skills__caption">SCSS</figcaption>
        </figure>
        <figure className="skills__grid--item6 skills__image">
          <img src={BEM} alt="bem" className="skills__picture" />
          <figcaption className="skills__caption">BEM</figcaption>
        </figure>
        <figure className="skills__grid--item7 skills__image">
          <img
            src={React}
            alt="react"
            className="skills__picture"
          />
          <figcaption className="skills__caption">React</figcaption>
        </figure>
        <figure className="skills__grid--item8 skills__image">
          <img src={Java} alt="java" className="skills__picture" />
          <figcaption className="skills__caption">Java</figcaption>
        </figure>
        <figure className="skills__grid--item9 skills__image">
          <img
            src={SpringBoot}
            alt="spring-boot"
            className="skills__picture"
          />
          <figcaption className="skills__caption">Spring Boot</figcaption>
        </figure>
      </div>
    </section>
    </Layout>
  );
};

export default Skills;
