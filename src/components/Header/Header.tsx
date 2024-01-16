import NavBar from "../NavBar/NavBar";
import "./Header.scss";

/* type HeaderProps = {

}; */

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__heading">Sacha McCormack</h1>
            <NavBar />        
        </header>
    )
};

export default Header;