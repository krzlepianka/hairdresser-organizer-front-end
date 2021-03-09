import { React, useState } from 'react';
import Message from '../shared/Message/Message';
import Button from '../Button/Button';
import Input from '../Input/Input';
import validationRules from '../shared/validationSchema';
import validationMessages from '../shared/validationMessages';

const Form = ({
    variant,
    labelStyle,
    inputStyle,
    messageStyle,
    buttonStyle
}) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        errors: {
            email: "",
            password: ""
        }
    });

    const onHandleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onHandleSubmit = e => {
        e.preventDefault();
        validateForm();
    };

    const validateForm = () => {
        let errors = {};
        validationRules.type.email.validFormat(user.email)
            ? errors.email = ''
            : errors.email = validationMessages.email.invalid
        for (let key in validationRules.type.password) {
            validationRules.type.password[key](user.password) !== true
                ? errors.password = validationMessages.password.invalid
                : errors.password = ''
        }
        setUser({
            ...user,
            errors
        })
    }

    return (
        <>
            <form className={`form--${variant}`} onSubmit={onHandleSubmit}>
                <Input
                    variant={inputStyle}
                    labelStyle={labelStyle}
                    title="email"
                    name="email"
                    inputmode="email"
                    type="email"
                    autocomplete="none"
                    value={user.login}
                    placeholder="podaj email"
                    handleChange={onHandleChange}
                />
                <Message
                    messageStyle={messageStyle}
                    message={user.errors.email}
                />
                <Input
                    variant={inputStyle}
                    labelStyle={labelStyle}
                    title="hasło"
                    name="password"
                    inputmode="none"
                    type="password"
                    autocomplete="none"
                    value={user.password}
                    placeholder="podaj hasło"
                    handleChange={onHandleChange}
                />
                <Message
                    messageStyle={messageStyle}
                    message={user.errors.password}
                />
                <Button variant={buttonStyle}>Zaloguj</Button>
            </form>
        </>
    )
};

export default Form;