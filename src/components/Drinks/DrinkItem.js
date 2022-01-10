import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './DrinkItem.module.css';
import DrinkItemForm from './DrinkItemForm';
import Card from '../UI/Card';

const DrinkItem = props => {
     const cartCtx = useContext(CartContext);
     const price = `$${props.price.toFixed(2)}`

     const addToCartHandler = sum => {
         cartCtx.addItem({
             id: props.id,
             name: props.name,
             sum: sum,
             price: props.price
         });

     };
    
    return(
        <Card>
        <article className={classes.drink}>
            <div className={classes.drinkInfo}>
                <h3>{props.name}</h3>
     
                <img src={props.image} alt="" className={classes.drinkImg} />
           
                <p className={classes.description}>{props.description}</p>
      
             

         
            <p className={classes.price}>{price}</p>
                <DrinkItemForm id={props.id} onAddToCart={addToCartHandler} />
                </div>

           
        </article>
        </Card>
    );
}

export default DrinkItem;