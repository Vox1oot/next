import Couche from '../../components/Couche';
import styles from  '../../styles/Index.module.scss';

const index = ({ couches }) => {
    return (
        <section className={`${styles.couches} flex`}>
            {couches.map(({ id, price, images }) => (
                <Couche key={id} id={id} price={price} image={images[0]} />
            ))}
        </section>
    )
};

export default index;

export async function getStaticProps() {
    const response = await fetch('http://localhost:5000/couches');
    const couches = await response.json();

    return {
        props: { couches },
    }
}