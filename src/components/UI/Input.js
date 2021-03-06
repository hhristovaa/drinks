import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <fieldset className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </fieldset>
    );
});

export default Input;