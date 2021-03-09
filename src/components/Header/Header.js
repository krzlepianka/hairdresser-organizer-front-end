import './Header.scss';

const Header = ({ variant, children }) => {

    return (
        <div className={`header--${variant}`}>
            <h3>{children}</h3>
        </div>
    )
}

export default Header;