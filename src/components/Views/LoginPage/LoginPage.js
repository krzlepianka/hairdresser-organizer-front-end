import React from 'react';
import Form from '../../Form/Form';
import Wrapper from '../../shared/Wrapper/Wrapper';
import '../../shared/Wrapper/Wrapper.scss';
import '../../Button/Button.scss';
import '../../Form/Form.scss';
import '../../shared/Message/Message.scss';


const LoginPage = () => {
    return (
        <Wrapper variant="login">
            <Form
                variant="primary"
                labelStyle="primary"
                inputStyle="primary"
                messageStyle="message"
                buttonStyle="primary"
            />
        </Wrapper>
    )
};

export default LoginPage;