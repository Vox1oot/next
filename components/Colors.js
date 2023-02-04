import styles from  '../styles/Details.module.scss';

const arrayColors = ['red', 'blue', 'brown', 'yellow', 'black', 'grey', 'cyan'];

const Colors = () => (
    <div className={`${styles.info__colors} flex mt-20`}>
        {arrayColors.map((color, index) => (
            <div className={styles.color} key={index} style={{ 'background-color': color }}></div>
        ))}
    </div>
);

export default Colors;