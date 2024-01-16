import "./Button.scss";

type ButtonProps = {
    name: string;
    classname: string;
    link: string;
};

const Button = ({name, classname, link}: ButtonProps) => {
    return (
        <a href={link} className={classname}>{name}</a>
    )
};

export default Button;