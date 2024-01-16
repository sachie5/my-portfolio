import "./Button.scss";

type ButtonProps = {
    name: string;
    classname: string;
};

const Button = ({name, classname}: ButtonProps) => {
    return (
        <button className={classname}>{name}</button>
    )
};

export default Button;