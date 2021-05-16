import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:8080/api`
})


const ServiceRegistration = (submitForm, validate) => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(
        () => {
            if (Object.keys(errors).length === 0 && isSubmitting) {

                api.post("/registration", values)
                    .then(response => {
                        if(response.data != null){
                            console.log("Registration success");
                        }
                    });

                submitForm();
            }
        },
        [errors]
    );

    return { handleChange, handleSubmit, values, errors };

};
export default ServiceRegistration;