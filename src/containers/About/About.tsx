import "./About.scss";
import Profile from "../../assets/images/profile.jpg";
import Layout from "../../components/Layout/Layout";


const About = () => {
  return (
    <Layout>
   <section className="profile">
      <img src={Profile} alt="profile" className="profile__image"/>
      <div className="profile__info">
        <h2 className="profile__info--heading">About Me</h2>
        <p className="profile__info--description">
          My previous career was in teaching at a primary level, for three years
          in South Korea and another three at a junior school in London. My
          responsibilities included planning and delivering lessons, liaising
          with my colleagues and monitoring the progress of students regularly
          using a range of assessments. My experiences developed my soft skills
          in communication, teamwork and adapting to unpredictable situations.
        </p>
        <p className="profile__info--description">
          These experiences sparked my interest in tech as I began teaching
          computing to my students, which exposed me to the beginnings of
          computer science and software engineering. I begin to do further
          research using websites (such as freeCodeCamp and Codeacademy) until I
          found _nology. Through the thorough Full Stack Software Engineering
          course, I have learned a multitude of coding languages and skills
          which are demonstrated through my projects.
        </p>
      </div>
    </section>
    </Layout>
  );
};

export default About;
