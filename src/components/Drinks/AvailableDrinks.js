import classes from './AvailableDrinks.module.css';
import DrinkItem from './DrinkItem';
import DRINKS_MOCK_DATA from './DRINKS_MOCK_DATA';

const AvailableDrinks = () => {
  const drinksList = DRINKS_MOCK_DATA.map((drink) => (
    <DrinkItem
      id={drink.id}
      key={drink.id}
      name={drink.name}
      image={drink.image}
      description={drink.description}
      price={drink.price}
    />
  ));


  return (
    <section className={classes.drinks}>
      {drinksList}
    </section>
  )
};

export default AvailableDrinks;