import { useState, useRef } from 'react';
import classes from './DrinkItemForm.module.css';
import Input from '../UI/Input';

const DrinkItemForm = props => {
    const [quantityIsValid, setQuantityIsValid] = useState(true);
    const quantityInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        const currQuantity = quantityInputRef.current.value;
        const currQuantityNum = +currQuantity;
        if (currQuantity.trim().length === 0 || currQuantityNum < 1 || currQuantityNum > 10) {
            setQuantityIsValid(false);
            return;
        }
        props.onAddToCart(currQuantityNum);



    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={quantityInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!quantityIsValid && <p>Please enter a valid number. Limit 10 per customer. </p>}

        </form>
    );
}

export default DrinkItemForm;