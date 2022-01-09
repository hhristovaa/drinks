import classes from './Header.module.css';
import drinksImage from '../../assets/carousel2.png';
import HeaderCartButton from './HeaderCartButton';
import DrinksSummary from '../Drinks/DrinksSummary';

const Header = props => {
    return(
        <>
        <nav className={classes.header}>
            <h1>DrinksMarket</h1>
            <HeaderCartButton onClick={props.onOpenCart}/>
        </nav>
        <header className={classes['main-image']}>
            <img src={drinksImage} alt='Drinks for the header section' />
            <DrinksSummary/>
        </header>

        </>
    );
}

export default Header;