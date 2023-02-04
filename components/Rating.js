import { AiOutlineStar} from 'react-icons/ai';
import styles from  '../styles/Details.module.scss';

const createArray = (length) => [...Array(length)];

const Rating = ({ totalLen = 5 }) => {

    return (
        <div className="info__rating mt-20 flex">
            <div className="flex">
                {createArray(totalLen).map((el, index) => (
                    <AiOutlineStar key={index} />
                ))}
            </div>
            <div className={styles.info__ratingCount}>
                <span>2 отзыва</span>
            </div>
        </div>
    )
}

export default Rating;