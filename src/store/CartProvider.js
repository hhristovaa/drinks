import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalSum: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedTotalSum= state.totalSum + action.item.price * action.item.sum;

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                sum: existingCartItem.sum + action.item.sum
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            //if added for the first time 
            updatedItems = state.items.concat(action.item);

        }

        return {
            items: updatedItems,
            totalSum: updatedTotalSum
        };
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalSum= state.totalSum - existingItem.price;
        let updatedItems;
        if (existingItem.sum === 1 ) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, sum: existingItem.sum - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalSum: updatedTotalSum
        }

            
    }



    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});

    };

    const cartContext = {
        items: cartState.items,
        totalSum: cartState.totalSum,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;