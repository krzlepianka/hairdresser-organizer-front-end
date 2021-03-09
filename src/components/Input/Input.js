import React from 'react';
import './Input.scss';

const Input = ({
    variant,
    title,
    name,
    type,
    value,
    placeholder,
    handleChange,
    inputmode,
    autocomplete,
}) => {
    return (
        <>
            <label className={`label--${variant}`} htmlFor={name}>{title}</label>
            <input
                inputode={inputmode}
                className={`input--${variant}`}
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={e => handleChange(e)}
                autoComplete={autocomplete}
            />
        </>
    )
};

export default Input;