import { useState } from 'react';
import Header from './components/Layout/Header';
import Drinks from './components/Drinks/Drinks';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartOpen, setOpenCart] = useState(false);

  const openCartHandler = () => {
    setOpenCart(true);
  };

  const closeCartHandler = () => {
    setOpenCart(false);

  };

  return (
    <CartProvider>
   {isCartOpen  && <Cart onClose={closeCartHandler}/>}
    <Header onOpenCart={openCartHandler} />
    <main>
      <Drinks/>
    </main>
    </CartProvider>
  );
}

export default App;
