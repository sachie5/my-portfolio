import "./Contacts.scss";
import Layout from "../../components/Layout/Layout";
import Github from "../../assets/images/github.svg";
import Linkedin from "../../assets/images/linkedin.svg";


const Contacts = () => {
    return (
      <Layout>
      <section className="contacts">
      <div className="contacts-container">
        <a href="https://github.com/sachie5"
          ><img src={Github} alt="github" className="contacts__image"
        /></a>
        <a href="https://www.linkedin.com/in/sacha-mccormack/"
          ><img src={Linkedin} alt="linkedin" className="contacts__image"
        /></a>
        </div>
        <a href="#"><p className="contacts__email">sachamccormack@gmail.com</p></a>

        </section>
      </Layout>
    );
  };
  
  export default Contacts;
  