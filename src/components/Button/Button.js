import './Button.scss';

const Button = ({ variant, children }) => {
    return (
        <button className={`button--${variant}`}>
            {children}
        </button>
    )
};

export default Button;