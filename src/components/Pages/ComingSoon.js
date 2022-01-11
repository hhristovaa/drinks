import classes from './ComingSoon.module.css';
import comingSoonImg from '../../assets/coming-soon.jpg'

const ComingSoon = () => {
    return (
        <section className={classes['coming-soon']}>
            <img src={comingSoonImg} className={classes['coming-soon-img']} alt='Coming soon cover photo'/>
            <h2>This functionality is still in development.</h2>
            <p>Sorry for the inconvenience.</p>
        </section>
    );
}

export default ComingSoon;