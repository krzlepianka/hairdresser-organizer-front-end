import './Wrapper.scss';

const Wrapper = ({ variant, children }) => {
    return (
        <div className={`wrapper--${variant}`}>
            {children}
        </div>
    );
}

export default Wrapper;