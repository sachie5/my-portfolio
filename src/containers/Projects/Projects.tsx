import "./Projects.scss";
import Code from "../../assets/images/Code.svg";
import Calculator from "../../assets/images/calculator-image.png";
import TicketTracker from "../../assets/images/ticket-tracker-image.png";
import Game from "../../assets/images/game-image.png";
import API from "../../assets/images/react-image.png";
import DefaultImage from "../../assets/images/project-screenshot.jpg";
import Layout from "../../components/Layout/Layout";



const Projects = () => {
  return (
    <Layout>
    <section className="projects">
      <div className="projects__grid">
        <figure className="projects__figure projects__grid--item1">
          <img
            src={Calculator}
            alt="project1"
            className="projects__image"
          />
          <figcaption className="projects__caption">
            <h4 className="projects__skill">TypeScript</h4>
            <h5 className="projects__name">Calculator</h5>
            <p className="projects__description">
              Created a working online Calculator using HTML, SCSS and
              TypeScript.
            </p>
            <div className="button-container">
            <a
              target="_blank"
              href="https://github.com/sachie5/calculator-project"
              className="projects__button"
            >
              Code
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            <a
              target="_blank"
              href="https://sachie5.github.io/calculator-project/"
              className="projects__button"
            >
              Preview
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            </div>
          </figcaption>
        </figure>
        <figure className="projects__figure projects__grid--item2">
          <img
            src={Game}
            alt="project2"
            className="projects__image"
          />
          <figcaption className="projects__caption">
            <h4 className="projects__skill">TypeScript</h4>
            <h5 className="projects__name">Quiz Game</h5>
            <p className="projects__description">
              A quiz game aimed at children at the end of Key Stage 2 to
              practice grammar and maths.
            </p>
            <div className="button-container">
            <a
              target="_blank"
              href="https://github.com/sachie5/game-project"
              className="projects__button"
            >
              Code
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            <a
              target="_blank"
              href="https://sachie5.github.io/game-project/"
              className="projects__button"
            >
              Preview
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            </div>
          </figcaption>
        </figure>
        <figure className="projects__figure projects__grid--item3">
          <img
            src={TicketTracker}
            alt="project3"
            className="projects__image"
          />
          <figcaption className="projects__caption">
            <h4 className="projects__skill">REACT</h4>
            <h5 className="projects__name">Ticket Tracker</h5>
            <p className="projects__description">
              A ticket tracker to keep track of completed tasks of a group of
              employees.
            </p>
            <div className="button-container">
            <a
              target="_blank"
              href="https://github.com/sachie5/ticket-tracker-project"
              className="projects__button"
            >
              Code
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            <a
              target="_blank"
              href="https://sachie5.github.io/ticket-tracker-project/"
              className="projects__button"
            >
              Preview
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            </div>
          </figcaption>
        </figure>
        <figure className="projects__figure projects__grid--item4">
          <img
            src={API}
            alt="project4"
            className="projects__image"
          />
          <figcaption className="projects__caption">
            <h4 className="projects__skill">REACT</h4>
            <h5 className="projects__name">Punk API</h5>
            <p className="projects__description">
              A website built using REACT using data obtained from an API.
            </p>
            <div className="button-container">
            <a
              target="_blank"
              href="https://github.com/sachie5/react-punk-project"
              className="projects__button"
            >
              Code
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            <a
              target="_blank"
              href="https://sachie5.github.io/react-punk-project/"
              className="projects__button"
            >
              Preview
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            </div>
          </figcaption>
        </figure>
        <figure className="projects__figure projects__grid--item5">
          <img
            src={DefaultImage}
            alt="project5"
            className="projects__image"
          />
          <figcaption className="projects__caption">
            <h4 className="projects__skill">REACT</h4>
            <h5 className="projects__name">Client Project</h5>
            <p className="projects__description">
              Create a management system for a company named Aperio Derma.
            </p>
            <div className="button-container">
            <a target="_blank" href="#" className="projects__button">
              Code
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            <a target="_blank" href="#" className="projects__button">
              Preview
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            </div>
          </figcaption>
        </figure>
        <figure className="projects__figure projects__grid--item6">
          <img
            src={DefaultImage}
            alt="project6"
            className="projects__image"
          />
          <figcaption className="projects__caption">
            <h4 className="projects__skill">Untitled Project</h4>
            <h5 className="projects__name">Untitled Project</h5>
            <p className="projects__description">New project loading...</p>
            <div className="button-container">
            <a target="_blank" href="#" className="projects__button">
              Code
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            <a target="_blank" href="#" className="projects__button">
              Preview
              <img
                src={Code}
                alt="code"
                className="projects__button--image"
              />
            </a>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    </Layout>
  );
};

export default Projects;
