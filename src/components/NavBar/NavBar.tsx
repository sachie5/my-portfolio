import "./NavBar.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

/* type NavBarProps = {

}; */

const NavBar = () => {

    const classname = "header__link";
    return (
        <nav className="header__nav">
            <Link to="/"><Button name="Home" classname={classname} /></Link>
            <Link to="/about"><Button name="About" classname={classname} /></Link>
            <Link to="/skills"><Button name="Skills" classname={classname} /></Link>
            <Link to="/projects"><Button name="Projects" classname={classname}  /></Link>
            <Link to="/contacts"><Button name="Get in Touch" classname={classname} /></Link>
        </nav>
    )
};

export default NavBar;