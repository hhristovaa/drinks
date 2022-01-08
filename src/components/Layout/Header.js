import classes from './Header.module.css';
import drinksImage from '../../assets/carousel3.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return(
        <>
        <header className={classes.header}>
            <h1>DrinksMarket</h1>
            <HeaderCartButton onClick={props.onOpenCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={drinksImage} alt='Drinks for the header section' />
        </div>

        </>
    );
}

export default Header;