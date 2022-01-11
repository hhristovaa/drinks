import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalSum = `$${cartCtx.totalSum.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const addToCartHandler = item => {
        cartCtx.addItem({ ...item, sum: 1 });
    };

    const removeFromCartHandler = id => {
        cartCtx.removeItem(id)
    };

    const cartItems = (
        <section className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    sum={item.sum}
                    price={item.price}
                    onAdd={addToCartHandler.bind(null, item)}
                    onRemove={removeFromCartHandler.bind(null, item.id)}
                />
            ))}
        </section>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total</span>
                <span>{totalSum}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal >
    )
};

export default Cart;