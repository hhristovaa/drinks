import classes from './Header.module.css';
import drinksImage from '../../assets/carousel3.jpg';
import HeaderCartButton from './HeaderCartButton';
import DrinksHeroText from '../Drinks/DrinksHeroText';
import { Link } from 'react-router-dom';

const Header = props => {
    return(
        <>
        <nav className={classes.header}>
        <div className={classes.menu}>
            <Link to='/home'><h1>DrinksMarket</h1></Link>
       
            <Link to='/home'><h3>Home</h3></Link>
            <Link to='/about'><h3>About</h3></Link>
            </div>
            <HeaderCartButton onClick={props.onOpenCart}/>
         
        </nav>
        {/* <header className={classes['main-image']}>
            <img src={drinksImage} alt='Drinks for the header section' />
            <DrinksHeroText/>
        </header> */}

        </>
    );
}

export default Header;