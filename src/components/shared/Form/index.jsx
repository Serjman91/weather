// libraries
import React from 'react';
// api
import { getCurrentWeather } from 'api/weather';
// styles
import './index.css';

const Form = ({ onSubmitCallback }) => {
    const handleSubmit = async event => {
        event.preventDefault();

        const formData = {
            [event.target.query.name]: event.target.query.value
        };

        try {
            const data = await getCurrentWeather(formData);

            if (onSubmitCallback) {
                onSubmitCallback(data);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <form className="input__city-form" onSubmit={handleSubmit}>
            <label htmlFor="query">Hey, bro, let see the weather in your city!</label>
            <input id="query" type="text" name="query" placeholder="Please enter city" />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;