const Image = ({ variant, src, alt }) => <img className={`image--${variant}`} src={src} alt={alt} />

export default Image;