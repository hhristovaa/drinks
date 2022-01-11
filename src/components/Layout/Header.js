import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import { NavLink } from 'react-router-dom';

const Header = props => {
    return (
        <>
            <nav className={classes.header}>
                <div className={classes.menu}>
                    <NavLink to='/home'><h1>DrinksMarket</h1></NavLink>
                    <NavLink to='/home'><h3>Home</h3></NavLink>
                    <NavLink to='/about'><h3>About</h3></NavLink>
                    <NavLink to='/soon'><h3>Contact</h3></NavLink>
                </div>
                <HeaderCartButton onClick={props.onOpenCart} />
            </nav>
        </>
    );
}

export default Header;