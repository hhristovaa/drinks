import classes from './About.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faHandHoldingHeart, faCoffee } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    return (
        <main className={classes.about}>
            <h1>About </h1>
            <div className={classes['about-wrapper']}>
                <section className={classes['about-content']}>
                    <h2>Our Values</h2>
                    <FontAwesomeIcon className={classes.icon} icon={faHandHoldingHeart} size={'2x'} />
                    <p>
                        At DrinksMarket we have a core vision and set of values which aim to grow our business and build our brands internationally.
                        Our values are open communication, quality products and service, being flexible in adapting to change. We are creating a safe,
                        challengin, fun and rewarding work environment and conducting business in an appreciative, honest and professional manner.
                        Our vision is to be the best beverage wholesaler in all aspects of our business as perceived by customers and suppliers.
                    </p>
                </section>
                <section className={classes['about-content']}>
                    <h2>Our Products</h2>
                    <FontAwesomeIcon className={classes.icon} icon={faCoffee} size={'2x'} />
                    <p>
                        Our juice production is inherently sustainable in that no part of the fruit is wasted.
                        In addition, we are making significant strides in measuring and improving our environmental
                        footprint during juice production itself, across the following areas: industrial energy consumption,
                        greenhouse gas emissions, water usage and solid waste generation.
                        A key part of our sustainability efforts is our successful certification process and partnership with the Rainforest Alliance,
                        Fairtrade and other partners.
                    </p>
                </section>
                <section className={classes['about-content']}>
                    <h2>Our Partners</h2>
                    <FontAwesomeIcon className={classes.icon} icon={faHandshake} size={'2x'} />
                    <p>
                        We like to say that we are not in the coffee business serving people, but in the people business serving coffee.
                        Our employees &ndash; who we call partners &ndash; are at the heart of the Starbucks experience. We are committed to
                        making our partners proud and investing in their health, well-being and success and to creating a culture of belonging
                        where everyone is welcome. We are committed to the highest standards of quality and service, embracing our heritage while
                        innovating to create new experiences to savor.
                    </p>
                </section>
            </div>
        </main>
    );
}

export default About;