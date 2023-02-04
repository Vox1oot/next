import Link from 'next/link';
import styles from '../styles/Couche.module.scss';
import Image from 'next/image'

const DISCOUNT = 10;

const calcPriseWithoutDiscount = (currentPrice) => (percent) => Math.round(currentPrice / ( 1 - percent / 100));

const Couche = ({ id, price, image }) => {
  return (
    <>
        <div className={styles.couche}>
            <div className={styles.couche__inner}>
                <div className={styles.couche__img}>
                    <Image width={500} height={400} className="img" src={image.path} alt="image" />
                </div>
                <div className={styles.couche__info}>
                    <div className="couche-info__name">Диван клик-клак</div>
                    <div className="couche-info__price couche-price flex">
                        <div className={styles.couche__price}>
                            {`${price} Р`}
                        </div>
                        <div className={styles.couche__fullprice}>
                            {`${calcPriseWithoutDiscount(price)(DISCOUNT)} Р`}
                        </div>
                        <div className={styles.couche__discount}>
                            {`${DISCOUNT} %`}
                        </div>
                    </div>
                    <div>
                        <Link href={`/couches/${id}`}>
                            <button className={styles.couche__button}>Посмотреть</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default Couche;
