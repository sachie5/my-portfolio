import "./Home.scss";
import HomePic  from "../../assets/images/home-picture.jpg";
import Layout from "../../components/Layout/Layout";

const Home = () => {
    return (
        <Layout>
        <section className="home">
            <div className="home__info">
                <h1 className="home__info--heading">Hi! I'm Sacha McCormack</h1>
                <p className="home__info--message">I am a Junior Full Stack Software Developer</p>
            </div>
            <img src={HomePic} alt="home-profile" className="home__picture"/>
      </section>
      </Layout>
    )
};

export default Home;