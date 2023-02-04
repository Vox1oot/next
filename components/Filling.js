import styles from  '../styles/Details.module.scss';
const fillings = ['НПБ', 'ППУ', 'ЗМЕЙКА', 'ПБ'];

const Filling = () => (
    <div className={`${styles.info__filling} flex mt-20`}>
        {fillings.map((value, index) => (
            <div className={styles.filling} key={index}>
                <span>{value}</span>
            </div>
        ))}
    </div>
);

export default Filling;