const validationSchema = {
    type: {
        email: {
            minLength: (value) => (value.length > 0),
            validFormat: (value) => /^[^@]+@\w+(\.\w+)+\w$/.test(value)
        },
        password: {
            capitalLetter: (value) => /[A-Z]/.test(value),
            oneNumber: (value) => /[0-9]/.test(value),
            minLength: (value) => (value.length > 5)
        },
        fullName: {
            minLength: (value) => (value.length > 5)
        },
        phoneNumber: {
            onlyNumbers: (value) => /^[0-9]*$/.test(value)
        }
    }
};

export default validationSchema;