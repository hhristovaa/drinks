
import classes from './Header.module.css';
import drinksImage from '../../assets/carousel3.jpg';
import DrinksHeroText from '../Drinks/DrinksHeroText';


const MainContent = () => {
    return(
              <header className={classes['main-image']}>
            <img src={drinksImage} alt='Drinks for the header section' />
            <DrinksHeroText/>
        </header>
    )
}

export default MainContent;