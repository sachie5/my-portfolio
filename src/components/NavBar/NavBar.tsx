import "./NavBar.scss";
import Button from "../Button/Button";

/* type NavBarProps = {

}; */

const NavBar = () => {

    const classname = "header__link";
    return (
        <nav className="header__nav">
            <Button name="Home" classname={classname} link="#home"/>
            <Button name="About" classname={classname} link="#about" />
            <Button name="Projects" classname={classname} link="#projects" />
            <Button name="Get in Touch" classname={`${classname} ${classname}--touch`} link="#contacts" />
        </nav>
    )
};

export default NavBar;