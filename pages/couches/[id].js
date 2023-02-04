import Image from 'next/image'
import styles from  '../../styles/Details.module.scss';
import Rating from '../../components/Rating';
import Colors from '../../components/Colors';
import Filling from '../../components/Filling';

const Details = ({ dataCouche }) => {
    const { price, images } = dataCouche

    return (
        <section className={styles.details}>
            <div className={`${styles.details__container} flex`}>
                <div className={styles.details__img}>
                    <Image className="img" width={700} height={500} src={images.at(-1).path} alt="диван" />
                </div>
                <div className={`${styles.details__carousel} flex`}>
                    {Array(4).fill('').map((item, index) => (
                        <Image src={images.at(-1).path} className="bg-image" key={index} width={100} height={100} alt="диван-мини" />
                    ))}
                </div>
                <div className={styles.info}>
                    <h2 className={styles.info__name}>Клик-клак</h2>
                    <p className="info__description mt-20">Диван клик клак</p>
                    <Rating />
                    <div className={`${styles.info__price} mt-20`}>{`${price} Р`}</div>
                    <h3 className="info__cloth mt-20">Велюр</h3>
                    <Colors />
                    <h3 className={styles.info__choice}>Выбрать наполнение:</h3>
                    <Filling />
                    <h3 className="mt-20">Доставка</h3>
                    <div className={styles.info__footer}>
                        <div className="mt-10 flex space-between">
                            <p className="f1">по Челябинску</p>
                            <p className="f2">700 Р</p>
                        </div>
                        <div className="mt-10 flex space-between">
                            <p className="f1">по России</p>
                            <p className="f2">от 1000 Р</p>
                        </div>
                        <div className="mt-10 flex space-between">
                            <p className="f1">самовывоз</p>
                            <p className="f2">Бесплатно</p>   
                        </div>
                        <button className={`${styles.info__button}`}>В Корзину</button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Details;

export const getServerSideProps = async ({ params: { id } }) => {
    const response = await fetch(`http://localhost:5000/couches/${id}`);
    const dataCouche = await response.json();

    return {
        props: { dataCouche },
    }
}