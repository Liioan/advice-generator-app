//. styles
import styles from './Card.module.css';

//. assets
import DesktopDevider from '../../assets/desktopDevider.svg';
import MobileDevider from '../../assets/mobileDevider.svg';
import Dice from '../../assets/dice.svg';

export default function Card() {
  return (
    <main className={styles.card}>
      <div className={styles.advice}>
        <span>advice number</span>
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora
          placeat officia nulla numquam. Ipsam quidem nostrum neque veniam non?"
        </p>
      </div>
      <img src={DesktopDevider} alt='' />
      <button>
        <img src={Dice} alt='' />
      </button>
    </main>
  );
}
