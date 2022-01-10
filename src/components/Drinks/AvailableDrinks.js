import classes from './AvailableDrinks.module.css';
import DrinkItem from './DrinkItem';
import DRINKS_MOCK_DATA from './DRINKS_MOCK_DATA';

// const DUMMY_MEALS = [
//   {
//     id: 1,
//     name: "Espresso",
//     price: 2.5,
//     description: "Locally-roasted organic blend",
//     // image: "https://i.posti g.cc/RF t8S0D/espresso.png",
//     image: teaImg,
//   },

//   {
//     id: 2,
//     name: "Black Tea",
//     price: 25,
//     description: "Stronger in flavor with less caffeine than coffee.",
//     image: require('../../assets/fruit-tea.jpg'),
//     // image: "https://i.posti g.cc/BnrchfDr/black-tea.jpg",
//   },

//   {
//     id: 3,
//     name: "Cappuccino",
//     price: 4.5,
//     description: "Barista's favorite drink!",
//     // image: "https://i.posti g.cc/LXRkpkxv/cappuccino.jpg",

//   },
//   {
//     id: 4,
//     name: "Coffee with  ilk",
//     price: 3,
//     description: "Locally-roasted organic blend with a splash of  ilk.",
//     // image: "https://i.posti g.cc/d1B2t7XF/coffee- ilk.jpg",

//   },

//   {
//     id: 5,
//     name: "Cold Brew",
//     price: 5.5,
//     description: "S ooth and deliciously drinkable!",
//     // image: "https://i.posti g.cc/05VYTwDd/cold-brew.jpg",

//   },
//   {
//     id: 6,
//     name: "Iced  atcha",
//     price: 6,
//     description: "Unique and tasty drink.",
//     // image: "https://i.posti g.cc/vT25fJbS/cold- atcha.jpg",

//   },


//   {
//     id: 7,
//     name: "Fruit Tea",
//     price: 3.5,
//     description: "We offer  any kinds and flavours.",
//     // image: "https://i.posti g.cc/13hbq2Xz/fruit-tea.jpg",

//   },

//   {
//     id: 8,
//     name: "Iced Coffee",
//     price: 3.55,
//     description: "Cold version of regular coffee.",
//     // image: "https://i.posti g.cc/WbK 3c9d/iced-coffee.jpg",

//   },

//   {
//     id: 9,
//     name: "Iced Green Tea",
//     price: 4,
//     description: "Refreshing and revitalizing bevarage.",
//     // image: "https://i.posti g.cc/1zyTWFph/iced-green-tea.jpg",
//   },
//   {
//     id: 10,
//     name: "Iced Tea",
//     price: 3.5,
//     description: "Refreshing caffeine-free drink idea.",


//     // image: "https://i.posti g.cc/R0xK7Qx9/iced-tea.jpg",

//   },

//   {
//     id: 11,
//     name: "Latte",
//     price: 4.5,
//     description: "One-third espresso, two-thirds heated  milk and a little foam.",
//     // image: "https://i.posti g.cc/0yw7KX3c/latte.jpg",

//   },

//   {
//     id: 12,
//     name: "Lavender Le onade",
//     price: 5,
//     description: "The most refreshing lavender lemonade for sure!",
//     // image: "https://i.posti g.cc/bwxWHgS9/lavender.jpg",

//   },

//   {
//     id: 13,
//     name: "Old-Fashioned Le onade",
//     price: 3.5,
//     description: "Sweet and si ple classic le onade.",
//     // image: "https://i.posti g.cc/ GtLgGDc/le onade.jpg",

//   },
//   {
//     id: 14,
//     name: "Raspberry Le onade",
//     price: 4.5,
//     description: "Taste tart raspberry sweetness coupled with  inty coolness.",
//     // image: "https://i.posti g.cc/ZRRQ h7w/raspberry1.jpg"
//   }
//   ];

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