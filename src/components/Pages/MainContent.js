
import classes from '../Layout/Header.module.css';
import drinksImage from '../../assets/drinks-cover.png';
import DrinksHeroText from '../Drinks/DrinksHeroText';

const MainContent = () => {
    return (
        <header className={classes['main-image']}>
            <img src={drinksImage} alt='Drinks for the header section' />
            <DrinksHeroText />
        </header>
    )
}

export default MainContent;