const Message = ({ messageStyle, message }) => <p className={messageStyle}>{message ? message : ""}</p>

export default Message;