import './Button.scss';

const Button = ({ variant, children, handleClick, id }) => {
    return (
        <button
            className={`button--${variant}`}
            onClick={handleClick ? (e) => handleClick(e, id) : null}
        >
            {children}
        </button>
    )
};

export default Button;