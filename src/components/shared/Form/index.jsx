// libraries
import React from 'react';
// styles
import './index.css';

const Form = ({ onSubmitCallback, closeFormCallback }) => {
    const handleSubmit = async event => {
        event.preventDefault();

        onSubmitCallback(event.target.query.value);
        closeFormCallback(false);
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