import { useState } from 'react';
import Header from './components/Layout/Header';
import Drinks from './components/Drinks/Drinks';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './components/Pages/About';
import MainContent from './components/Pages/MainContent';
import Footer from './components/Layout/Footer';
import ComingSoon from './components/Pages/ComingSoon';

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
      {isCartOpen && <Cart onClose={closeCartHandler} />}
      <Header onOpenCart={openCartHandler} />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route exact path='/about/*' element={<About />} />
          <Route exact path='/home' element={<><MainContent /><Drinks /></>} />
          <Route exact path='/soon' element={<ComingSoon />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </CartProvider>
  );
}

export default App;
