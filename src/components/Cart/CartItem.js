import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <div className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes['cart-wrapper']}>
                    <div className={classes.summary}>
                        <span className={classes.amount}> Quantity:  {props.sum}</span>
                        <div>
                            <button onClick={props.onRemove}>&ndash;
                            </button>
                            <button onClick={props.onAdd}>&#x0002B;
                            </button>
                        </div>
                    </div>
                    <span className={classes.price}>{price}</span>
                </div>
            </div>

        </div>
    );
}

export default CartItem;